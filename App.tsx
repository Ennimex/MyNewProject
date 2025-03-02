import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function App() {
  return (
    <View style={styles.container}>
      
      <Text>Aplicacion movil 5B</Text>
      
      <ActivityIndicator size={'large'} color={'pink'} />
      
      <Text>Esta app es un ejemplo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },botong:{
    backgroundColor:'blue'
  }

});