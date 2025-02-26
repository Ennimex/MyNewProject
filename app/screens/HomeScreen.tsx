import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import WeatherCard from '../components/WeatherCard';

interface WeatherData {
day: string;
date: string;
maxTemp: number;
minTemp: number;
rainProbability: number;
condition: string;
}

const HomeScreen: React.FC = () => {
const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

const fetchWeatherData = async () => {
    try {
    const apiKey = 'b1b5902b3dba89b829629c8fc4c64316'; 
    const city = 'Mexico City';
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=40&appid=${apiKey}&lang=es`
    );

    if (!response.ok) {
        throw new Error(response.status === 401 ? 'API Key inválida' : 'Error del servidor');
    }

    const data = await response.json();

      // Agrupar por día
    const groupedByDay = data.list.reduce((acc: any, item: any) => {
        const date = new Date(item.dt * 1000);
        const dateKey = date.toISOString().split('T')[0]; // Formato YYYY-MM-DD

        if (!acc[dateKey]) {
        acc[dateKey] = {
            dateObj: date,
            temps: [],
            rainProbabilities: [],
            conditions: [],
        };
        }
        acc[dateKey].temps.push(item.main.temp_max);
        acc[dateKey].rainProbabilities.push(item.pop);
        acc[dateKey].conditions.push(item.weather[0].description);
        return acc;
    }, {});

      // Procesar datos
    const forecastDays = Object.values(groupedByDay).map((day: any) => ({
        day: day.dateObj.toLocaleDateString('es-ES', { weekday: 'long' }),
        date: day.dateObj.toLocaleDateString('es-ES'),
        maxTemp: Math.round(Math.max(...day.temps)),
        minTemp: Math.round(Math.min(...day.temps)),
        rainProbability: Math.round(Math.max(...day.rainProbabilities) * 100),
        condition: day.conditions[0],
    }));

      setWeatherData(forecastDays.slice(0, 5)); // Últimos 5 días
    } catch (error) {
    if (error instanceof Error) {
        setError(error.message);
    } else {
        setError('Error desconocido');
    }
    } finally {
    setLoading(false);
    }
};

useEffect(() => {
    fetchWeatherData();
}, []);

if (loading) {
    return (
    <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Cargando pronóstico...</Text>
    </View>
    );
}

if (error) {
    return (
    <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
    </View>
    );
}

return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Pronóstico para México</Text>
    <View style={styles.listContainer}>
        {weatherData.map((data, index) => (
        <WeatherCard
            key={index}
            day={data.day}
            date={data.date}
            maxTemp={data.maxTemp}
            minTemp={data.minTemp}
            rainProbability={data.rainProbability}
            condition={data.condition}
        />
        ))}
    </View>
    </ScrollView>
);
};

const styles = StyleSheet.create({
container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
},
listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
},
loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
errorText: {
    fontSize: 18,
    color: 'red',
},
});

export default HomeScreen;