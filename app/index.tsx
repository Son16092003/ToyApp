import { Stack } from "expo-router";
import { View } from "react-native";
import Card from "./screens/Card";
import Navbar from "./components/Navbar";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={{
          flex: 1,
        }}
      >
        <Card />
        {/* <Navbar /> */}
      </View>
    </>
  );
}