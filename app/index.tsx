import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '@/constants/theme'
import { useRouter } from 'expo-router';

export default function Index() {
  const Router=useRouter();
  useEffect(()=>{
    setTimeout(()=>{
      Router.replace('/welcome')
    },2000)
  },[])

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/splashImage.png")} style={styles.logo}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.neutral900
  },
  logo:{
    width:200,
    height:200,
  }
})