

import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import { StyleSheet, ScrollView, View, Alert, Text } from 'react-native';
import { TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import fetchOrders from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard'
import { Order } from '../types';

function Orders() {

    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        setIsLoading(true);
        fetchOrders()
            .then(response => setOrders(response.data))
            .catch(() => Alert.alert('Houve um erro ao buscar os pedidos!'))
            .finally(() => setIsLoading(false));



    }, []);

  
    const handleOnPress = () => {
        navigation.navigate('OrderDetails');

    }

    return (

        <>

            <Header />
            <ScrollView style={styles.container}>
                {
                    isLoading ? (

                        <Text>Buscando Pedidos...</Text>
                    ) : (
                            orders.map(order => (

                                <TouchableWithoutFeedback key={order.id} onPress={handleOnPress}>
                                    <OrderCard order={order} />
                                </TouchableWithoutFeedback>
                            ))
                        )
                }


            </ScrollView>

        </>
    );
}
const styles = StyleSheet.create({

    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
    },



});

export default Orders;
