import { StyleSheet, Text, View } from 'react-native';
import ImageDemo from './components/Layout';


export default function App() {
  let output
  output = <ImageDemo image1={require('./assets/Presentation2.jpg')} text1="hahahahaha" text2="hahahahaha"
  image2={require('./assets/Presentation1.jpg')}  
  image3={require('./assets/BEAN.jpg')} text3="hahahahaha"
  />
  return output
}

