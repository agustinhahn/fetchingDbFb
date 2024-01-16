import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useGetPalabrasQuery } from "../app/services/palabrasServices"
import { setPalabras } from '../features/palabrasSlice'
import { useEffect } from 'react'


const Letras = ({navigation, route}) => {
    const { data: palabras } = useGetPalabrasQuery()
    const dispatch = useDispatch()

    useEffect(() => {
        if (palabras) {
            dispatch(setPalabras(palabras))
        }
    }, [palabras, dispatch])

    const palabrasRender = useSelector((state) => state.palabras.value.palabras)

    return (
        <FlatList
            style={styles.container}
            data={palabrasRender}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Pressable style={styles.itemContainer} onPress={()=>navigation.navigate("PalabraNew", {id: item.id})}><Text style={styles.itemText}>{item.palabra}</Text></ Pressable>}
        />
    )
}

export default Letras

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    itemContainer: {
        marginBottom: 8,
        padding: 12,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});