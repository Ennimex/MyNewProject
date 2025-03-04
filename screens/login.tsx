import { Alert, Button, StyleSheet, Text, TextInput, View,ScrollView } from "react-native";
import React from "react";
import {useState} from "react";
import { useRouter } from "expo-router";

const Login = () => {
    const router = useRouter();
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    return(
        <View style={estilo.contenedor}>
            <Text style={estilo.titulo}>PODAI</Text>
            <Text style={estilo.labels}>Usuario</Text>
            
            <TextInput style={estilo.cajas} 
            placeholder="Usuario..." 
            value={usuario}
            onChangeText={setUsuario}
            />
            
            <Text style={estilo.labels} >Password</Text>
            <TextInput style={estilo.cajas}
            placeholder="Password..."
            value={password}
            onChangeText={setPassword}
            />

            <Button title="Login" 
            color={'#4B2e1e'} 
            onPress={()=>{Alert.alert('Logeando...')}}/>
        </View>
    )
}

export default Login;


const estilo = StyleSheet.create({

    
    contenedor:{
        backgroundColor:'#EDE0D4',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }, 
    titulo:{
        fontSize:25,
        color:'#4B2E1E',
        fontWeight:'bold'
    },
    labels:{
        fontSize:18,
        color:'#4B2e1e',
        fontWeight:'700'
    },
    cajas:{
        borderColor:'#4B2e1e',
        borderWidth:2,
        borderRadius:7,
        marginVertical:7,
        padding:7
    }
})