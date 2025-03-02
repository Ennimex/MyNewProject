import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
const Contador = () => {
// Estado para el contador
const [contador, setContador] = useState<number>(0);
// Función para incrementar
const incrementar = () => {
setContador(contador + 1);
};
// Función para decrementar
const decrementar = () => {
setContador(contador - 1);
};
// Función para resetear
const resetear = () => {
setContador(0);
};
return (
<View style={styles.container}>
<Text style={styles.texto}>Contador: {contador}</Text>
<View style={styles.botonesContainer}>
<Button title="Incrementar" onPress={incrementar} />
<Button title="Decrementar" onPress={decrementar} />
<Button title="Resetear" onPress={resetear} />
</View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1, justifyContent: 'center', alignItems: 'center',
},
texto: {
fontSize: 24, marginBottom: 20,
},
botonesContainer: {
flexDirection: 'row', gap: 10,
},
});
export default Contador;