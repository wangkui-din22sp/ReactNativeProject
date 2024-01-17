import { StyleSheet, Text, View } from 'react-native';
import ImageDemo from './components/Layout';


export default function App() {
  let output
  output = <ImageDemo image1={require('./assets/Presentation2.jpg')} text1="sent successfully to Mr. Bean" text2="$99999999999"
  image2={require('./assets/Presentation1.jpg')}  
  image3={require('./assets/BEAN.jpg')} text3="Bean Bean@bean.com"
  />
  return output
}

