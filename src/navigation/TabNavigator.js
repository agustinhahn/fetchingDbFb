import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import TabIcon from '../components/TabIcon';
import PalabraNueva from "../components/PalabraNueva"
import Welcome from '../screens/Welcome';
import Letras from '../screens/Letras';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar
                }}
            >
                <Tab.Screen
                    name="WelcomeTab"
                    component={Welcome}
                    options={{
                        tabBarIcon: ({ focused }) => <TabIcon icon="home" label="wellcome" focused={focused} />
                    }}
                />
                <Tab.Screen
                    name="HomeTab"
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused }) => <TabIcon icon="home" label="numeroBase" focused={focused} />
                    }}
                />
                <Tab.Screen
                    name='Letras'
                    component={Letras}
                    options={{
                        tabBarIcon: ({ focused }) => <TabIcon icon="clipboard" label="palabrasBase" focused={focused} />
                    }}
                />
                <Tab.Screen
                    name='PalabraNew'
                    component={PalabraNueva}
                    options={{
                        tabBarIcon: ({ focused }) => <TabIcon icon="clipboard" label="nueva palabra" focused={focused} />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}


export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "grey",
        elevation: 4,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90


    }
})