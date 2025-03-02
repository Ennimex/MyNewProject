import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import {Link, useRouter}   from 'expo-router'

const index = () => {
const router = useRouter();
return (
    <View>
        <Text>index</Text>
        <Link href ={'index'}></Link>

        <Button title="ir a propiedades" 
        onPress={()=>{router.replace('propiedades')}} />
    </View>
)
}

export default index

const styles = StyleSheet.create({})