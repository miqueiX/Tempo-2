import React, { Component } from "react";
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity} from "react-native";
import * as Font from "expo-font"
import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync()

let fonts = {
  "Anja-Eliane": require("../assets/Anja.ttf")
}

export default class Home extends Component {

constructor (){
  super()
  this.state = {FontsLoaded:false}
}



  async loadFonts(){
    await Font.loadAsync(fonts)
    this.setState({FontsLoaded:true})
  }
 componentDidMount(){
 this.loadFonts()}

  render() {
    if(this.state.FontsLoaded){
    
      SplashScreen.hideAsync()

      return (
        <View style={styles.Container}>
          <ImageBackground
            source={require("../assets/ensolarado.jpeg")}
            style={styles.ImageBackground}
          >
            <View style = {[styles.cardContainer,{border:"solid 2px yellow"}]} >
              <Text style = {styles.textContainer}>
                Chuva:
            </Text>
            <Text style = {styles.textContainer}>
                Mililitros:
            </Text>
            <Text style = {styles.textContainer}>
                Chance:
            </Text>
              </View>
          
          
            <View style = {[styles.cardContainer,{border:"solid 2px lightblue"}]} >
              <Text style = {styles.textContainer}>
              Vento:
              </Text >
              <Text style = {styles.textContainer}> 
              Umidade:
            </Text>
            <Text style = {styles.textContainer}>
              Velocidade:
            </Text>
            </View>
        
        <TouchableOpacity style = {[styles.cardContainer,{border:"solid 2px gray", flex:0.1}]} onPress= {()=>{
          this.props.navigation.navigate("Config")
        }} >
  <Text style = {[styles.textContainer,{ textAlign:"center", alignSelf:"center", paddingBottom:20}]}>
  Settings
  </Text>
        </TouchableOpacity>

  
          </ImageBackground>
        </View>
      );
    }
    }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },

  cardContainer:{
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    flex: 0.3,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 100,
    borderRadius: 18,
    fontFamily: "Anja-Eliane"
  },

  textContainer:{
textAlign:"center",
fontFamily:  "Anja-Eliane",
justifyContent: "center",
alignSelf: "center",
fontSize: 25,
marginTop: 25,

  },



  ImageBackground: {
    flex: 1,
    backgroundColor: "black",
  },
});
