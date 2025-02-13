import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Foter from '../components/Foter';


export const Plantilla = () => {
    return (
        <View style={styles.container}>
            <Header titulo = 'Plantilla' nombre = 'Nombre' imagen = '../app/assets/logo.png' />
            <Header titulo = 'Plantilla' nombre = 'Nombre' imagen = '' />
            <Text>Contenido</Text>
            <Foter fecha = '2021' grupo = 'Grupo 1' />
        </View>
    );
};

export default Plantilla;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
});