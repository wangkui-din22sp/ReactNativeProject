import { StyleSheet, Text, View } from 'react-native';
import StyleDemo from './components/StyleDemo';
import Dimensions1 from './components/1Dimensions';
import ImageDemo from './components/ImageDemo';


export default function App() {
  let output
  output = <ImageDemo image1={require('./assets/Presentation2.jpg')} text1="hahahahaha" 
  text2="hahahahaha"
  image2={require('./assets/Presentation1.jpg')}  
  image3={require('./assets/BEAN.jpg')} text3="hahahahaha"
  />
  return output
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
