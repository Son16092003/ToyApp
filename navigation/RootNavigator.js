// RootNavigator.js
import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { supabase } from "../config/supabase";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setUserId, clearUserId } from "../reduxtollkit/UserSlice";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const dispatch = useDispatch();
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        // ✅ Lấy session từ Supabase
        const { data: { session } } = await supabase.auth.getSession();
        console.log("User ID:", session?.user?.id);

        if (session) {
          // ✅ Lưu userId vào Redux
          dispatch(setUserId(session.user.id));
          console.log("Session:", session); 
          console.log("Session User ID:", session.user.id);  
          // Kiểm tra thời gian hết hạn nếu có lưu customSession
          const storedSession = await AsyncStorage.getItem("customSession");
          if (storedSession) {
            const { expiresAt } = JSON.parse(storedSession);
            console.log("expiresAt:", expiresAt);
            if (new Date().getTime() < expiresAt) {
              setSession(session);
            } else {
              await supabase.auth.signOut();
              await AsyncStorage.removeItem("customSession");
              dispatch(clearUserId()); // ✅ clear Redux khi hết hạn
            }
          } else {
            setSession(session);
          }
        } else {
          // ✅ Không có session → clear Redux
          dispatch(clearUserId());
        }
      } catch (error) {
        console.error("Error checking session:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();

    // ✅ Lắng nghe sự thay đổi session
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        if (session?.user?.id) {
          dispatch(setUserId(session.user.id));
        } else {
          dispatch(clearUserId());
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [dispatch]);

  if (isLoading) {
    return <Text>Đang tải...</Text>;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {session ? (
        <Stack.Screen name="App" component={AppNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
}
