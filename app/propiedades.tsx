import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import {Link, useRouter}   from 'expo-router'

const propiedades = () => {
  const router = useRouter();
  return (
    <View>
      <Text>propiedades</Text>
        <Link href='index'> index </Link>
        <Button title="ir a index" 
        onPress={()=>{router.replace('index')}} />
    </View>
  )
}

export default propiedades

const styles = StyleSheet.create({})