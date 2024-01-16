import { View, Text } from 'react-native'
import {useGetPalabrasQuery} from '../app/services/palabrasServices'
import { useDispatch } from 'react-redux'
import {setPalabras} from "../features/palabrasSlice"
import { useEffect } from 'react'

const Welcome = () => {


    return (
        <View>
            <Text>Welcome</Text>
        </View>
    )
}

export default Welcome