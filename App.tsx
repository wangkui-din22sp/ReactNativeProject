import { StyleSheet, Text, View } from 'react-native';
import ImageDemo from './components/Layout';


export default function App() {
  let output
  output = <ImageDemo image1={require('./assets/Presentation2.jpg')} text1="sent successfully to Mr. Bean" text2="$99999"
  image2={require('./assets/Presentation1.jpg')}  
  image3={require('./assets/BEAN.jpg')} text3="Mr. Bean bean@bean.com"
  text4="The transaction was done on Feb. 30, 2054."
  text5="The transaction number is 0xFFFFFFFF"
  />
  return output
}

