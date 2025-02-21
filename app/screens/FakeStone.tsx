import { StyleSheet, Text, View, Image } from 'react-native'
import Header from '../components/Header'
import Foother from '../components/Footer'
import React, { useState } from 'react'
import Boton from '../components/Boton'

const FakeStone = () => {
  type producto= {
    id: number,
    nombre: string,
    precio: number,
    descripcion: string,
    categoria: string,
    imagen: string,
    raiting: {
      rate: number,
      count: number
    }
  }
  const [productos, setProductos] = useState< producto > ();
  const [loanding, setLoanding] = useState< boolean > (true);

  //pantalla unload
  const UnLoadScreen = () => {
    return (
      <View>
        <Text>Loanding...</Text>
        <Boton titulo="Cargar" onPress={cosulta} />
      </View>
    )
  }



  //pantalla con datos cargados\
  const LoadScreen = () => {
    return (
      <View>
        <Text>Productos</Text>
        <Text>{productos?.nombre}</Text>
        <Text>{productos?.precio}</Text>
        <Text>{productos?.descripcion}</Text>
        <Text>{productos?.categoria}</Text>
        <Image source={{ uri: productos?.imagen }} style={{ width: 100, height: 100 }} />
      </View>
    )
  }

  const cosulta = async() => {
    setLoanding(true);
    try {
      const response = await fetch('https://fakestoreapi.com/products/1');
      if (!response.ok) {
        throw new Error('Error en la llamada:${response.status}');
      }
      //pasamos la respsuesta a json
      const datos = await response.json();
      //guardamos el dato en el estado productos
      setProductos(datos);
      //cambiamos el estado de loanding
      setLoanding(false);
    } catch (error) {
      console.log('Error en la llamada:${error}');
    }
  }
  return (
    <View style={styles.container}>
      <Header titulo="Title" nombre="Name" imagen="ImageURL" />
      {loanding ? UnLoadScreen() : LoadScreen()}
      <Foother fecha="07/02/2025" grupo="5B" />
    </View>
  )
}

export default FakeStone

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})