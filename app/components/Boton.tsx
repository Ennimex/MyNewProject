import {StyleSheet, Text, View, Pressable, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

type Propiedades = {
    titulo: string;
    onPress: () => void;
    variante: 'primario' | 'secundario'| 'peligro',
    estilo:StyleProp<ViewStyle>,
    disable: boolean;
    icono: React.ReactNode;
    posicionIcono: 'izquierda' | 'derecha';
};

const Boton = (props: Propiedades) => {
    const getVariante = () => {
        switch (props.variante) {
            case 'secundario':return styles.botonSecundario;
            case 'peligro':return styles.botonPeligro;
            default: return styles.botonPrimario;
        }
    };   

    return (
        <Pressable onPress={props.onPress} style={[getVariante(), props.disable && styles.disable]}>
            <View>
                {props.icono && props.posicionIcono !== 'derecha' && props.icono} 
                <Text style={styles.titulo}> {props.titulo}</Text>
                {props.icono && props.posicionIcono === 'derecha' && props.icono}
            </View>
        </Pressable>
    );
};

export default Boton;

const styles = StyleSheet.create({
    boton: {
        backgroundColor: '#000',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 5,
        
    },
    titulo: {
        color: '#fff',
        marginStart: 10,
    },
    botonPrimario: {
        backgroundColor: '#000',
    },
    botonSecundario: {
        backgroundColor: '#000',
    },
    botonPeligro: {
        backgroundColor: '#000',
    },
    disable: {
        backgroundColor: '#000',
    },
});