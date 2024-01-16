import { View, Text, FlatList } from 'react-native'
import { useGetNumerosQuery } from '../app/services/palabrasServices'

const Home = () => {

    const {data: numeros} = useGetNumerosQuery()

    return (
        <FlatList 
            data={numeros}
            keyExtractor={item => item.id}
            renderItem={({item}) => <View><Text>{item.numero}</Text></View>}
        />
    )
}

export default Home