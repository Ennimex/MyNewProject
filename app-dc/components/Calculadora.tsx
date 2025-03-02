import React, { useState } from 'react';
import { Button, View, TextInput, Text, StyleSheet } from 'react-native';
const Calculadora = () => {
// Estados para los valores y el resultado
const [valor1, setValor1] = useState<string>('');
const [valor2, setValor2] = useState<string>('');
const [resultado, setResultado] = useState<number | null>(null);
// Funciones para las operaciones
const sumar = () => {
const num1 = parseFloat(valor1);
const num2 = parseFloat(valor2);
setResultado(num1 + num2);
};

const restar = () => {
const num1 = parseFloat(valor1);
const num2 = parseFloat(valor2);
setResultado(num1 - num2);
};
const multiplicar = () => {
const num1 = parseFloat(valor1);
const num2 = parseFloat(valor2);
setResultado(num1 * num2);
};
const dividir = () => {
const num1 = parseFloat(valor1);
const num2 = parseFloat(valor2);
setResultado(num1 / num2);
};
return (
<View style={styles.container}>
<TextInput
style={styles.input}
placeholder="Valor 1"
value={valor1}
onChangeText={setValor1}
keyboardType="numeric"
/>
<TextInput
style={styles.input}
placeholder="Valor 2"
value={valor2}
onChangeText={setValor2}
keyboardType="numeric"
/>
<View style={styles.botonesContainer}>
<Button title="Sumar" onPress={sumar} />
<Button title="Restar" onPress={restar} />
<Button title="Multiplicar" onPress={multiplicar} />
<Button title="Dividir" onPress={dividir} />
</View>
{resultado !== null && (
<Text style={styles.resultado}>Resultado: {resultado}</Text>
)}
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
padding: 20,
},
input: {

width: '80%',
borderWidth: 1,
borderColor: '#ccc',
padding: 10,
marginBottom: 10,
},
botonesContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
gap: 10,
marginBottom: 20,
},
resultado: {
fontSize: 24,
marginTop: 20,
},
});
export default Calculadora;