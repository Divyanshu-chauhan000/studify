import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'


const message = [
  "Learn New Things",
  "Explore New World",
  "Connect to World"
]

const Login = () => {

  const [wordIndex, setWordIndex] = useState(0)
  const [visible, setVisible] = useState("")
  const [charIndex, setCharIndex] = useState(0)
  const [forward, setForward] = useState(true)

  const[email , setEmail] = useState("");
  const[password , setPassword] = useState("");
  const[ emailerrors , setemailErrors] = useState('');
  const[passworderrors , setPasswordErrors] = useState('');
 
  useEffect(() => {

    const current = message[wordIndex]

    const interval = setInterval(() => {

      if (forward) {

  
        if (charIndex < current.length) {
          setVisible(current.slice(0, charIndex + 1))
          setCharIndex(prev => prev + 1)
        } else {

          setTimeout(() => {
            setForward(false)
          }, 800)

        }

      } else {

        if (charIndex > 0) {
          setVisible(current.slice(0, charIndex - 1))
          setCharIndex(prev => prev - 1)
        } else {

          setForward(true)

          setWordIndex(
            prev => (prev + 1) % message.length
          )

        }

      }

    }, 150)

    return () => clearInterval(interval)

  }, [charIndex, forward, wordIndex]);


  const handleSubmit = async (e : any)  =>{
    setemailErrors('');
    setPasswordErrors('');
    if(!email){
      setemailErrors('Email is required');
       return
    }
    
    if(!password){
      setPasswordErrors('Password is required');
      return
    }




    try{
    const response = await fetch('http://localhost:5000/api/v1/auth/login' ,{
       method : "POST",
       headers:{
        'Content-Type' : 'application/json'
       },
       body : JSON.stringify({
        email : email.trim(),
        password: password
       })
    })

    const data = await response.json();

    if(!response.ok){
      throw new Error(data.message || "Something went wrong");
    }

    //  Alert.alert('Success' , 'Login Sucessfull')
     alert( 'User Logged In Successfully !');
     console.log("User Logged In successfully");

     router.push('/(tabs)/home')


  }catch(error :  any){
       alert(error.message || 'Network error. Please try Again')
  }
    
    console.log("Submitted data is " , "Email : ", email , "Password : ", password )

    setEmail('');
    setPassword('');

  }

  return (
    <LinearGradient
      colors={['#6ed9f5', '#F4F5F5', '#d1eff3', '#15616b']}
      style={{ flex: 1 }}
    >

      <SafeAreaView style={styles.loginContainer}>
        <ScrollView contentContainerStyle={styles.loginContent}>

          <View>

            <View style={styles.dynamicContainer}>
              <Text style={styles.welcomeTxt}>
              Welcome Back, Divyanshu
            </Text>

            <Text style={styles.message}>
              {visible}
            </Text>
            </View>

            <View>
               <Text style={styles.label}>Email</Text>
               <TextInput style={[styles.textArea , emailerrors ? styles.inputError : null]} value={email} onChangeText={(text) => {setEmail(text); if(text) setemailErrors('')} }  placeholder='Enter Your Email' autoCapitalize='none' keyboardType="email-address" />
                { emailerrors ? <Text style={styles.errorMessage}>{emailerrors}</Text> : null}

               <Text style={styles.label}>Password</Text>
               <TextInput style={[styles.textArea , passworderrors ? styles.inputError : null]} value={password} onChangeText={(text) => {setPassword(text); if(text) setPasswordErrors('')}} placeholder='Enter Your Password' secureTextEntry={true} />
               
               { passworderrors ? <Text style={styles.errorMessage}>{passworderrors}</Text> : null}

               <TouchableOpacity onPress={handleSubmit} style={styles.submitBtn}>
                <Text style={styles.SubmitTxt}>Submit</Text>
               </TouchableOpacity>
            </View>

            <View>
              <Text style={styles.account}>Don't have account ? <TouchableOpacity onPress={()=>router.push('/signup')}><Text style={styles.signUp}>SignUp</Text></TouchableOpacity></Text>
            </View>

          </View>

        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
  },

  loginContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    alignContent: 'center',
    justifyContent : "center"
  },

  welcomeTxt: {
    fontSize: 28,
    fontWeight: 'bold',
    color : '#0293a6'
  },

  message: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 10,
    color :"#057a8a"
  },

  dynamicContainer:{
    height : 100
  },

  label:{
    fontSize : 15,
    fontWeight : 'bold',
    paddingLeft : 7,
    marginTop : 15,
    color :'#15616b'

  },
  textArea:{
    borderWidth : 2,
    paddingVertical : 6,
    paddingHorizontal:6,
    borderRadius : 12,
    marginTop:3,
    color : '#036a77',
    borderColor : '#064e58'
  },
  submitBtn:{
    backgroundColor:'#117d8c',
    marginTop:15,
    paddingVertical : 8,
    borderRadius : 12,
    shadowColor : '#15616b',
    shadowOffset : {
      width: 0,
      height: 2
    },
    shadowOpacity : 0.3
  },
  SubmitTxt : {
    fontSize : 17,
    textAlign:'center',
    color : '#F4F5F5',
  },
  account:{
    textAlign:"center",
    marginTop : 10,
    color : '#095059',
    fontWeight : '500'
  },
  signUp:{
    color: '#0c3035'
  },
  inputError : {
    borderColor : 'red'
  },
  errorMessage:{
    color : 'red',
    marginTop : 6,
    paddingLeft : 6,
    fontSize : 12
  }

})

export default Login