import { StyleSheet, Text, View, Image, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Foother from './components/foother'

const FakeStore2 = () => {
    type producto= {
        id?: number,
        title: string,
        price?: number,
        description: string,
        category?: string,
        image: string,
        rating?: {
            rate: number,
            count: number
        }
}
// Estado para el contador
const [Productos, setProductos] = useState< producto [] > ([]);
const [Cargando, setCargando] = useState< boolean > (true);

useEffect(() => {
    const consultar = async() => {
        setCargando(true);
        try {
            
            const respuesta= await fetch('https://fakestoreapi.com/products');
            if (!respuesta.ok) {
                //si la respuesta no es correcta lanzamos un error
                throw new Error(`Error en la llamada: ${respuesta.status}`);
            }
            //pasamos la respsuesta a json
            const datos = await respuesta.json();
            //guardamos el dato en el estado productos
            setProductos(datos);
            //cambiamos el estado de loanding para que no se muestre el mensaje de carga
            setCargando(false);
        } catch (error) {
            console.log('Error en la llamada a la api', error);
        }
    }
    //llamamos a la funcion
    consultar(); 
}, [])

//pantalla del render item
const ProductosItem = (props: producto) => {
    return (
        <View style={styles.containerItem}>
            <Text>Producto: {props.title}</Text>
            <Text>Descripcion : {props.description}</Text>
            <Image source={{ uri: props.image }} style={{ width: 100, height: 100 }} />
        </View>
    )
}
//pantalla con datos cargados
const LoadScreen = () => {
    return (
        <View>
            <Text>Productos</Text>
            <FlatList 
            data={Productos} 
            renderItem={({ item }) => <ProductosItem {...item} />}
            keyExtractor = {item => item.id?.toString() || ''}
            />
        </View>
    )
}


const UnLoadScreen = () => {
    return (
        <View>
            <Text>Loanding...</Text>
            <ActivityIndicator/>
        </View>
    )
}



return (
    <View>
        <Header titulo="Fake store" 
        nombre="Alexander Hernandez Meza" 
        imagen="my-image-url" />
        //manda a llamar a la funcion que muestra la pantalla de carga
        {Cargando ? UnLoadScreen() : LoadScreen()}
        <Foother fecha="2023-10-01" grupo="Group A" />
    </View>
    )
}

export default FakeStore2;

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    containerItem:{
        backgroundColor:'#FF55',
        borderColor:'black',
        borderWidth:2,
        borderRadius:10
    }
})