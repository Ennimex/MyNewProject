import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

type Propiedades = {
    titulo: string;
    nombre: string;
    imagen: string;
};

const Header = (props: Propiedades) => {
    return (
        <View>
            <View style={styles.container}>
                <Image source={{ uri: props.imagen }} style={styles.Imagen} />
            </View>
            <View style={styles.container2}>
                <Text style={styles.titulo}>{props.titulo}</Text>
                <Text>{props.nombre}</Text>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
    },
    container2: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    Imagen: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
});