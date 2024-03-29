import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'


export default class ImageDemo extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'green', borderWidth: 10,borderColor: 'blue', paddingTop: 80, paddingLeft:20, paddingRight:20,paddingBottom:30 }}>
       
        <Image source={ this.props.image1 } style={{ flex:1, width: '100%', resizeMode: 'stretch'}}></Image>
       
        <View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.5)', width: '100%', alignItems: 'center', }}>
          <Text style={{ flex: 1, fontSize: 20, alignItems: 'center', color: 'blue', paddingTop: 20, paddingBottom: 2
           }}>{ this.props.text1 }</Text>

          <Text style={{ flex: 1, fontSize: 40, color: 'green'}}>{ this.props.text2 }</Text>
        </View>
        
        <View style={{ flex: 1, flexDirection: 'row', alignItems:'center', width: '100%' }}>
          <Image source={this.props.image3} style={{ flex: 1, width: 50, height:100, resizeMode: 'stretch' }} />
          <Text style={{ flex: 1, fontSize: 20, color: 'red', textAlign: 'center' }}>{this.props.text3}</Text>
        </View>

        <View style={{ flex: 1, backgroundColor: 'white', width:'100%',}}>

          <Text style={{ flex: 1, fontSize: 25, color: 'black', textAlign: 'center',alignItems: 'center'}}>{ this.props.text4 }</Text>
          <Text style={{ flex: 1, fontSize: 25, color: 'black', textAlign: 'center',alignItems: 'center'}}>{ this.props.text5 }</Text>
        </View>

        <Image source={ this.props.image2 } style={{ flex:1, width: '100%',resizeMode: 'stretch'}}></Image>

      </View>
    )
  }
}
