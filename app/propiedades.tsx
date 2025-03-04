import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';

const Propiedades = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>propiedades</Text>
      <Button title="ir a index" 
      onPress={() => { router.back()}} 
      />
    </View>
  );
};

export default Propiedades;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});