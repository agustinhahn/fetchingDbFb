import { View, Text, FlatList } from 'react-native'
import {  useSelector, useDispatch } from 'react-redux'
import {useGetPalabrasQuery} from "../app/services/palabrasServices"
import { setPalabras } from '../features/palabrasSlice'
import { useEffect } from 'react'


const LetrasStack = () => {
    const {data: palabras } = useGetPalabrasQuery()
    const dispatch = useDispatch()

    useEffect(()=>{
        if(palabras){
            dispatch(setPalabras(palabras))
        }
    },[palabras, dispatch])

    const palabrasRender = useSelector((state)=> state.palabras.value.palabras)

    return (
        <FlatList 
        data={palabrasRender}
        keyExtractor={item => item.id}
        renderItem={({item}) => <View><Text>{item.palabra}</Text></View>}
        />
    )
}

export default LetrasStack