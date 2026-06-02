import { Tabs  } from "expo-router";
import {Home , Settings , User , Search,  StarsIcon, BarChart, User2, UserCheck } from 'lucide-react-native';



export default function TabLayout(){
  return (
    <Tabs 
    screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        headerShown: true,
      }}
    >
       <Tabs.Screen name='home'  options={{title : "Home", tabBarIcon : ({color , size }) => <Home color = {color} size = {size} /> , headerShown : false }} /> 
       <Tabs.Screen name='explore'  options={{title : "explore", tabBarIcon : ({color , size }) => <Search color = {color} size = {size} /> ,headerShown : false }} /> 
       <Tabs.Screen name='ai'  options={{title : "ai", tabBarIcon : ({color , size }) => <StarsIcon color = {color} size = {size} />,headerShown : false  }} /> 
       <Tabs.Screen name='market'  options={{title : "market", tabBarIcon : ({color , size }) => <BarChart color = {color} size = {size} />,headerShown : false  }} /> 
       <Tabs.Screen name='profile'  options={{title : "profile", tabBarIcon : ({color , size }) => <User color = {color} size = {size} />,headerShown : false  }} /> 
    </Tabs>
  )
}