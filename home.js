import React, { Component } from 'react';
import { Alert, AppRegistry, Button, Text,StyleSheet, View,Image } from 'react-native';

export default class App extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
    
    
      <View style={styles.container}>
      <View style={styles.imgDiv}>
      <Image source={require('./src/bicycle.png')} ></Image>
     <Text style={styles.text}>lets start your ride with us....!</Text>
       
       </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Login"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Sign Up"
            color="#841584"
          />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   backgroundColor:'#bbb',
  },
   imgDiv: {
   alignItems: 'center',
  },
text:{
  color:"#009988",
  fontSize:20
  },
  buttonContainer: {
    margin: 20
  },
   imageContainer: {
    margin: 20,
    width:50,
    height:50,
    justifyContent: 'center',
    flex: 1,
     alignItems: 'center',
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
