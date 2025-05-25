import { Alert, Pressable, StyleSheet, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import BackButton from '@/components/BackButton'
import { colors, spacingX, spacingY } from '@/constants/theme'
import Input from '@/components/Input'
import * as Icons from 'phosphor-react-native'
import { verticalScale } from '@/utils/styling'
import Button from '@/components/Button'
import { useRouter } from 'expo-router'

export default function Register() {
  const emailRef=useRef("");
  const passwordRef=useRef("");
  const nameRef=useRef("");
  const [isLoading,setisLoading]=useState(false);
  const router=useRouter();
  const HandleSubmit = async()=>{
    if(!emailRef.current || !passwordRef.current || !nameRef.current){
      Alert.alert('Login',"Please fill all the fields");
      return;
    }
    console.log('name:',nameRef.current);
    console.log('email:',emailRef.current);
    console.log('password: ',passwordRef.current);
  }
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={28}/>
        <View style={{gap:5,marginTop:spacingY._20}}>
            <Typo size={30} fontWeight={"800"}>
              Lets
            </Typo>
            <Typo size={30} fontWeight={"800"}>
              Get Started
            </Typo>
        </View>

        {/* form */}
        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter}>
            Create an Account to track all your expenses
          </Typo>

          <Input 
              placeholder='Enter your Name' 
              onChangeText={(val)=>(nameRef.current=val)}
              icon={
                <Icons.User
                  size={verticalScale(26)} 
                  color={colors.neutral300} 
                  weight="fill"
              />}
            />
          <Input 
              placeholder='Enter your email' 
              onChangeText={(val)=>(emailRef.current=val)}
              icon={
                <Icons.At 
                  size={verticalScale(26)} 
                  color={colors.neutral300} 
                  weight="fill"
              />}
            />
          <Input 
              placeholder='Enter your Password' 
              onChangeText={(val)=>(passwordRef.current=val)}
              icon={
                <Icons.Lock 
                  size={verticalScale(26)} 
                  color={colors.neutral300} 
                  weight="fill"
              />}
              secureTextEntry={true}
            />

            <Button loading={isLoading} onPress={HandleSubmit}>
                <Typo fontWeight={"700"} color={colors.black} size={21}>
                  Sign Up
                </Typo>
            </Button>
        </View>

         {/* footer*/}
         <View style={styles.footer}>
                <Typo size={15}  >Already have an account?</Typo>
                <Pressable onPress={()=>router.navigate("/(auth)/login")}>
                  <Typo size={15} fontWeight={"700"} color={colors.primary}>
                    Login in
                  </Typo>
                </Pressable>
         </View>
      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        gap:spacingY._30,
        paddingHorizontal:spacingX._20
    },
    form:{
      gap:spacingY._20,
    },
    footer:{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      gap:5,
    },
})