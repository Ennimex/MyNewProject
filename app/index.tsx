import { StyleSheet, Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';

const index = () => {
  const router = useRouter();
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo} >Bienvenido a mi primera app</Text>

      <Button title=" Ir a propiedades" 
      onPress={() => { router.push('/propiedades'); }} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
});