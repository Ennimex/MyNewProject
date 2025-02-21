import { StyleSheet, Text, View, Image, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Foother from '../components/Footer'

const FakeStone2 = () => {
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
                throw new Error('Error en la llamada:${respuesta.status}');
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
        <View>
            <Text>Producto: {props.nombre}</Text>
            <Text>Descripcion : {props.descripcion}</Text>
            <Image source={{ uri: props.imagen }} style={{ width: 100, height: 100 }} />
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
//pantalla con datos cargados
const LoadScreen = () => {
    return (
        <View>
            <Text>Productos</Text>
            <FlatList data={Productos} 
            renderItem={({ item }) => <ProductosItem {...item} />}
            />
        </View>
    )
}
return (
    <View>
        <Header titulo="My Title" nombre="My Name" imagen="my-image-url" />
        <Text>Fake Stone</Text>
        //manda a llamar a la funcion que muestra la pantalla de carga
        {Cargando ? UnLoadScreen() : LoadScreen()}
        <Foother fecha="2023-10-01" grupo="Group A" />
    </View>
    )
}

export default FakeStone2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})