import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import {Link, useRouter}   from 'expo-router'

const index = () => {
const router = useRouter();
return (
    <View>
        <Text>index</Text>
        <Button title="ir a propiedades" 
        onPress={()=>{router.push('propiedades')}} />
    </View>
)
}

export default index

const styles = StyleSheet.create({})