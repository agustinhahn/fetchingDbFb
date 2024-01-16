import { View, Text, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import TabNavigator from './src/navigation/TabNavigator'
import {store} from './src/app/store'

const App = () => {
  return (
    <>
      <StatusBar />
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    </>
  )
}

export default App