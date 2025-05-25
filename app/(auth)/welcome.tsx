import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { colors, spacingY,spacingX } from '@/constants/theme'
import Typo from '@/components/Typo'
import { verticalScale } from '@/utils/styling'
import Button from '@/components/Button'
import Animated, {  FadeInDown } from 'react-native-reanimated'
import { useRouter } from 'expo-router'

export default function Welcome() {
    const router=useRouter();
  return (
    <ScreenWrapper>
        <Animated.View entering={FadeIn} style={styles.container}>
            <View>
                <TouchableOpacity onPress={()=>router.push('/(auth)/login')} style={styles.loginButton}>
                    <Typo fontWeight={"400"}>Sign in</Typo>
                </TouchableOpacity>
                <Animated.Image 
                    entering={FadeIn.duration(2000)}   
                    source={(require("@/assets/images/welcome.png"))} 
                    style={styles.WelcomeImage} 
                    resizeMode='contain'
                />
            </View>
            {/* footer */}
            <View style={styles.footer}>
                <View style={{alignItems:'center'}}>
                    <Typo size={30} fontWeight={"800"}>
                        Take charge of your
                    </Typo>
                    <Typo size={30} fontWeight={"800"}>
                        financial future
                    </Typo>
                </View>
                    <View style={{alignItems:'center',gap:2}}>
                    <Typo size={17} color={colors.textLight}>
                        Smart planning leads to lasting success
                    </Typo>
                    <Typo size={17} color={colors.textLight}>
                        Make every decision count
                    </Typo>
                </View>

                <Animated.View
                    entering={FadeInDown.duration(1000).delay(200).springify().damping(12)} 
                    style={styles.buttoncontainer}>
                    <Button onPress={()=> router.push('/(auth)/register')}>
                        <Typo size={22} color={colors.black} fontWeight={"600"}>Get Started</Typo>
                    </Button>
                </Animated.View>
            </View>
        </Animated.View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        paddingTop:spacingY._7,
    },
    WelcomeImage:{
        width:"100%",
        height: verticalScale(300),
        alignSelf:'center',
        marginTop:verticalScale(20)
    },
    loginButton:{
       alignSelf:'flex-end',
       paddingHorizontal:spacingX._25
    },
    footer:{
       backgroundColor:colors.neutral900,
       alignItems:'center',
       paddingTop:verticalScale(30),
       paddingBottom:verticalScale(45),
       gap:spacingY._20,
       shadowColor:"white",
       shadowOffset:{ width:0,height:-10},
       elevation:10,
       shadowRadius:25,
       shadowOpacity:0.5,
    },
    buttoncontainer:{
        width:"100%",
        paddingHorizontal:spacingX._25
    }

})