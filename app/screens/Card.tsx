import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Navbar from '../components/Navbar';
const Card = () => {
    const productList = [
        { id: '1', name: 'Sản phẩm 1', price: 100000, totalPrice: 200000, quantity: 1 },
        { id: '2', name: 'Sản phẩm 2', price: 150000, totalPrice: 300000, quantity: 2 },
        { id: '3', name: 'Sản phẩm 3', price: 120000, totalPrice: 240000, quantity: 2 },
        { id: '4', name: 'Sản phẩm 4', price: 120000, totalPrice: 240000, quantity: 2 },
        { id: '5', name: 'Sản phẩm 5', price: 120000, totalPrice: 240000, quantity: 2 },
    ];

    return (
        <View style={styles.container}>
            {/* <StatusBar backgroundColor="#FFC107" barStyle="dark-content" /> */}
            <View style={styles.headerContainer}>
                <Icon name="arrow-back" style={styles.arrowBack} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Giỏ hàng</Text>
                </View>
            </View>

            <View style={styles.bodyContainer}>
                <FlatList
                    data={productList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.cardItem}>
                            <View style={styles.bodyContent}>
                                <Text style={styles.nameProdcut}>{item.name}</Text>
                                <Text style={styles.totalPriceProdcut}>{item.totalPrice.toLocaleString()}đ</Text>
                            </View>
                            <Text style={styles.priceProdcut}>{item.price.toLocaleString()}đ</Text>
                            <View style={styles.buttonContainer}>
                                <View style={styles.operatorContainer}>
                                    <TouchableOpacity style={styles.pressIncreaseOperatorContainer}>
                                        <Text>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.quantity}>{item.quantity}</Text>
                                    <TouchableOpacity style={styles.pressDecreaseOperatorContainer}>
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.deleteContainer}>
                                    <TouchableOpacity style={styles.pressDeleteOperatorContainer}>
                                        <Text style={styles.textDelete}>Xoá</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>

            <View style={styles.footerContainer}>
                <View style={styles.paymentTextContainer}>
                    <Text style={styles.paymentText}>Tổng</Text>
                    <Text style={styles.paymentText}>200.000đ</Text>
                </View>
            </View>

            <View style={styles.paymentContainer}>
                <TouchableOpacity style={styles.buttonPaymentContainer}>
                    <Text style={styles.buttonPayment}>Thanh toán</Text>
                </TouchableOpacity>
            </View>
            <Navbar />
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#FFC107',
    },
    headerContainer: {
        backgroundColor: '#FFC107',
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        // paddingTop: 20,
    },
    arrowBack: {
        fontSize: 25,
        color: '#fff',
        paddingLeft: '5%',
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
        paddingRight: '10%',
    },
    bodyContainer: {
        flex: 9,
        // backgroundColor: 'red',
    },
    cardItem: {
        backgroundColor: '#fff',
        marginHorizontal: 12,
        marginVertical: 8,
        padding: 12,
        borderRadius: 12,
        shadowColor: '#FFC107',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Android
        borderWidth: 1,
        borderColor: '#FFC107',
    },
    bodyContent: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 12,
    },
    nameProdcut: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '4C4C4C',
    },
    totalPriceProdcut: {
        fontSize: 22,
        color: '#41B100',
    },
    priceProdcut: {
        fontSize: 22,
        color: '#41B100',
        paddingLeft: '3%',
        height: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 12,
        // backgroundColor: '#E0E0E0',
        marginVertical: 10,
    },
    operatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 10,
    },
    pressIncreaseOperatorContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: '#ffffff',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#BDBDBD',
    },
    pressDecreaseOperatorContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: '#ffffff',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 1,
        borderColor: '#BDBDBD',
    },
    quantity: {
        fontSize: 16,
        marginHorizontal: 10,
        color: '#000',
        width: 50,
        height: 40,
        textAlign: 'center',
        lineHeight: 48,
        backgroundColor: '#ffffff',
        marginLeft: 0,
        marginRight: 0,
        borderWidth: 1,
        borderColor: '#BDBDBD',
    },
    deleteContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        // backgroundColor: '#BDBDBD',
        borderWidth: 1,
        borderColor: 'red',
    },
    pressDeleteOperatorContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 25,
        // backgroundColor: '#BDBDBD',
        borderRadius: 10,
    },
    textDelete: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold',
    },
    footerContainer: {
        flex:1,
        // backgroundColor: 'blue',
        paddingHorizontal: 12,
        paddingVertical: 10,
        // marginBottom: 30,
    },
    paymentTextContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        paddingHorizontal: 20,
        height: 50,
    },
    paymentText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    paymentContainer: {
        flex: 1,
        // backgroundColor: 'white',
        justifyContent: 'center',
        marginVertical: 6,
        marginBottom: 24,
    },
    buttonPaymentContainer: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 12,
        marginVertical: 10,
        borderColor: '#FFC107',
        borderWidth: 1,
    },
    buttonPayment: {
        fontSize: 24,
        color: '#FFC107',
        fontWeight: 'bold',
        
    },
    navbarContainer: {
        flex: 1,
        backgroundColor: 'orange',
    }
})