import { View, Text, Pressable } from 'react-native'
import { useGetPalabrasQuery, usePostPalabrasMutation } from '../app/services/palabrasServices'

const PalabraNueva = () => {

    const {data: palabras,refetch} = useGetPalabrasQuery()
    const [triggerPostPalabra] = usePostPalabrasMutation()

    const nuevaPalabraEnviar = {
        "id":7,
        "palabra": "holaestoyprobandoquetanrapidoentras"
    }

    const agregarPalabra = async () => {
        await triggerPostPalabra(nuevaPalabraEnviar);
        refetch()
    }

    return (
        <View>
            <Text>PalabraNueva</Text>
            <Pressable onPress={()=> agregarPalabra()}>
                <Text>ENVIAR</Text>
            </Pressable>
        </View>
    )
}

export default PalabraNueva