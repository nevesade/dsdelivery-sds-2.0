
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useNavigation } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import  Header  from '../Header';
import { Order } from '../types';


type Props =  {

    route: {
        params: {
            order: Order;
        }
    }

}

function OrderDetails({ route } : Props) {

    const { order } = route.params;
    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('Orders');

    }


    return (

        <>
            <Header />
            <View >
                <Text>Detalhes do pedido {order.id}</Text>

            </View>


        </>


    );
}

const styles = StyleSheet.create({});

export default OrderDetails;
