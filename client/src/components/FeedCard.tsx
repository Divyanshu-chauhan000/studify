import { View, Text , Image , StyleSheet} from 'react-native'
import React from 'react'
import { MoreVertical } from 'lucide-react-native'

const FeedCard = () => {
  return (
   <View style={styles.feedCard}>
    <View style =  {styles.feedCardHead}>
       <Image source={require('../../assets/logo/Studify.png')} style={{width : 30 , height : 30 , borderRadius : 50}}/>
       <Text>Hello</Text>
       <MoreVertical size={20}  />
    </View>
    <Text></Text>
    <Image/>
    <View>

    </View>
   </View>
  )
}

const styles = StyleSheet.create({
  feedCard:{
     
  },
  feedCardHead:{
    
  }
})

export default FeedCard