
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useNavigation } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function OrderDetails() {


    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate ('Orders');

    }


    return (

     
            <View >
                <Text>Detalhes do pedido</Text>

            </View>
      

    );
}

const styles = StyleSheet.create({});

export default OrderDetails;
