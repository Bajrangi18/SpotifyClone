import {View} from 'react-native'
import { SafeAreaView } from 'react-native'
import MainView from './Components/MainView'
const App = () => {
  return(
    <SafeAreaView style={{flex:1,backgroundColor:'#121212'}}>
      <View style={{height:"100%",backgroundColor:'#121212'}}>
           <MainView/> 
      </View>
    </SafeAreaView>
  )
}
export default App