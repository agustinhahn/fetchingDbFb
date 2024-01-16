import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Letras from '../screens/Letras'
import PalabraNueva from '../components/PalabraNueva'

const Stack = createNativeStackNavigator()

const PalabrasStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Letras'
            screenOptions={
                ({ route }) => {
                    return {
                    }
                }
            }
        >
            <Stack.Screen name="Letras" component={Letras} />
            <Stack.Screen name="PalabraNew" component={PalabraNueva} />
        </Stack.Navigator>
    )
}

export default PalabrasStack