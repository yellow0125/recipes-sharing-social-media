import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper';
import { container, form } from '../../constants/Style';
import MainButton from '../UI/MainButton';
import { Button } from 'react-native-paper';
import Colors from '../../constants/Colors';
export default function AboutMe({ navigation }) {
  return (
    <>
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide}>
          <Image source={require('../../assets/img/hello1.png')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../../assets/img/hello2.png')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../../assets/img/hello3.png')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../../assets/img/hello4.png')} style={styles.image} />
        </View>
      </Swiper>
      <Button onPress={() => navigation.replace("Register")}>Create your account</Button>
    </>
  )
}


const styles = StyleSheet.create({
  wrapper: {

  },
  slide: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  image: {
    width: '100%',
    height: '100%',

  }
});