import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Foother from '../components/Footer'
import Contenido from '../components/contenido'

const Plantilla = () => {
  return (
    <View style={styles.container}>
      <Header titulo='Calculadora' nombre='Luis Alberto Mendoza' imagen='../../assets/myAvatar.png'/>
      <Contenido/>
      <Foother fecha='07/02/2025' grupo='5B'/>
    </View>
  )
}

export default Plantilla

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'stretch'
    }
})