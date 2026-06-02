import { View, Text,StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Search , Bell , BookAIcon } from 'lucide-react-native'
import StoryCircle from '../../components/StoryCircle'
import FeedCard from '../../components/FeedCard'

const home = () => {
  return (
   <SafeAreaView style={styles.homeContainer}>
    <ScrollView contentContainerStyle={styles.homeContent}>
      <View style={styles.homeNav}>
        <View style={{flexDirection : 'row', alignItems : 'center' , gap : 10}}>
          <Image source={require('../../../assets/logo/Studify.png')} style={styles.homeLogo}
            /> 
           {/* <BookAIcon size={30}/> */}
           <Text style={{fontSize : 23 , fontWeight : '700' , color : '#15616b'}}>Studify</Text>
        </View>
        <View style={{flexDirection : 'row', alignItems : 'center' , gap : 20}}> 
          <Search color={'#046565'} size={20} style={{ backgroundColor : '#afebf3' , padding:7 , borderRadius : 5, }}/>
          <Bell  color={'#046565'} size={20} style={{ backgroundColor : '#afebf3' , padding:7 , borderRadius : 5, }}/>
        </View>
      </View>

      <View>
        <StoryCircle/>
        <View style={{height : 30}}></View>
        <FeedCard/>
      </View>

    </ScrollView>

   </SafeAreaView>
  )
}


const styles =  StyleSheet.create({
  homeContainer : {
    flex :  1
  },
  homeContent:{
    flexGrow : 1,
    // alignItems : 'center',
    // justifyContent : 'center'

  },
  homeNav :{
    width : '100%',
    paddingHorizontal : 20,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    backgroundColor:'#f4f5f5',
    paddingVertical : 15,
  },
  homeLogo:{
    width : 35,
    height :35
  }
})
export default home