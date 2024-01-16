import { View, Text, Pressable, StyleSheet    } from 'react-native'
import { useGetPalabrasQuery, usePostPalabrasMutation, usePostNuevaPalabraMutation } from '../app/services/palabrasServices'


const PalabraNueva = ({route}) => {
    const {id} = route.params
    if(id){
        console.log(id)
    }
    const palabraNuevaSubir = "holasoylanueva"
    const {data: palabras,refetch} = useGetPalabrasQuery()
    const [triggerPostPalabra] = usePostPalabrasMutation()
    const [updatePalabra, error] = usePostNuevaPalabraMutation()

    const nuevaPalabraEnviar = {
        "id":7,
        "palabra": "holasoynuevo"
    }

    const agregarPalabra = async () => {
        await triggerPostPalabra(nuevaPalabraEnviar);
        refetch()
    }

    const modificarPalabra = () =>{
        updatePalabra({id,palabraNuevaSubir })
        refetch()
    }

    return (
        <View style={styles.container}>
            <Text>PalabraNueva</Text>
            <Pressable style={styles.btn1}  onPress={()=> agregarPalabra()}>
                <Text>ENVIAR</Text>
            </Pressable>
            <Text>MODIFICAR PALABRA</Text>
            <Pressable style={styles.btn2} onPress={() => modificarPalabra()}>
                <Text>ENVIAR</Text>
            </Pressable>
        </View>
    )
}

export default PalabraNueva

const styles = StyleSheet.create({
    container:{
        backgroundColor: "blue",
        flex:1,
        marginBottom:130
    },
    btn1: {
        borderWidth: 2,
        paddingVertical: 8,
        color:"white",
        textAlign:'center',
        backgroundColor: "red"
    },
    btn2: {
        borderWidth: 2,
        paddingVertical: 8,
        color:"white",
        textAlign:'center',
        backgroundColor: "yellow"
    }
})