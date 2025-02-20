import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

interface Calculo {
  id: string;
  consumo: number;
  porcentajePropina: number;
  montoPropina: string;
  total: string;
}

const CalculadoraPropinas: React.FC = () => {
  const [consumo, setConsumo] = useState<string>('');
  const [porcentajePropina, setPorcentajePropina] = useState<number>(15);
  const [propinaPersonalizada, setPropinaPersonalizada] = useState<string>('');
  const [historial, setHistorial] = useState<Calculo[]>([]);

  const calcularPropina = () => {
    const montoConsumo = parseFloat(consumo);
    if (isNaN(montoConsumo)) {
      alert('Por favor, ingresa un monto válido.');
      return;
    }

    const propina = (montoConsumo * (parseFloat(propinaPersonalizada) || porcentajePropina)) / 100;
    const total = montoConsumo + propina;

    const calculo: Calculo = {
      id: Math.random().toString(),
      consumo: montoConsumo,
      porcentajePropina: parseFloat(propinaPersonalizada) || porcentajePropina,
      montoPropina: propina.toFixed(2),
      total: total.toFixed(2),
    };

    setHistorial([calculo, ...historial]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Propinas</Text>
      <TextInput
        style={styles.input}
        placeholder="Monto del consumo"
        keyboardType="numeric"
        value={consumo}
        onChangeText={setConsumo}
      />
      <Text style={styles.label}>Selecciona el porcentaje de propina:</Text>
      <View style={styles.buttonGroup}>
        <Button title="10%" onPress={() => setPorcentajePropina(10)} />
        <Button title="15%" onPress={() => setPorcentajePropina(15)} />
        <Button title="20%" onPress={() => setPorcentajePropina(20)} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="O ingresa un porcentaje personalizado"
        keyboardType="numeric"
        value={propinaPersonalizada}
        onChangeText={setPropinaPersonalizada}
      />
      <Button title="Calcular Propina" onPress={calcularPropina} />
      <Text style={styles.result}>Propina: ${(parseFloat(consumo) * (parseFloat(propinaPersonalizada) || porcentajePropina) / 100).toFixed(2)}</Text>
      <Text style={styles.result}>Total a Pagar: ${(parseFloat(consumo) + (parseFloat(consumo) * (parseFloat(propinaPersonalizada) || porcentajePropina)) / 100).toFixed(2)}</Text>
      <Text style={styles.historyTitle}>Historial de Cálculos:</Text>
      <FlatList
        data={historial}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text>Consumo: ${item.consumo}</Text>
            <Text>Propina: {item.porcentajePropina}%</Text>
            <Text>Monto de Propina: ${item.montoPropina}</Text>
            <Text>Total: ${item.total}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
  },
  historyItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default CalculadoraPropinas;
