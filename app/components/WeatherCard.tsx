import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Definimos las propiedades que recibirá el componente
interface WeatherCardProps {
  day: string; // Día de la semana (ej: "Lunes")
  date: string; // Fecha en formato DD/MM/AAAA
  maxTemp: number; // Temperatura máxima
  minTemp: number; // Temperatura mínima
  rainProbability: number; // Probabilidad de lluvia (%)
  condition: string; // Estado del clima (ej: "Soleado")
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  day,
  date,
  maxTemp,
  minTemp,
  rainProbability,
  condition,
}) => {
  // Función para determinar el color de fondo según la temperatura máxima
  const getBackgroundColor = (temp: number) => {
    if (temp < 20) return '#87CEEB'; // Azul para temperaturas menores a 20°C
    if (temp >= 21 && temp <= 30) return '#FFD700'; // Amarillo para temperaturas entre 21°C y 30°C
    return '#FFA500'; // Naranja para temperaturas mayores a 30°C
  };

  return (
    <View style={[styles.card, { backgroundColor: getBackgroundColor(maxTemp) }]}>
      <Text style={styles.day}>{day}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.temp}>Max: {maxTemp}°C</Text>
      <Text style={styles.temp}>Min: {minTemp}°C</Text>
      <Text style={styles.rain}>Lluvia: {rainProbability}%</Text>
      <Text style={styles.condition}>{condition}</Text>
    </View>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    margin: 8,
    width: 150, // Ancho fijo para cada tarjeta
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Usamos boxShadow en lugar de shadow*
    elevation: 4, // Sombra para Android
  },
  day: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    marginBottom: 8,
  },
  temp: {
    fontSize: 14,
    marginBottom: 4,
  },
  rain: {
    fontSize: 14,
    marginBottom: 4,
  },
  condition: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default WeatherCard;