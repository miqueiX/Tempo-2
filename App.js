import React, { Component } from "react";
import { View, Text } from "react-native";
import axios from "axios";

class RainForecastApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rainForecast: null,
    };

    //this.apiKey = '0638ab9ff911a52f194db8cb8a031943' ; // Substitua com sua chave de API do OpenWeatherMap
    this.cidade = "Sao Paulo"; // Substitua com o nome da cidade desejada
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get("https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139")
      .then((response) => {
        this.setState({
          rainForecast: response.data,
        });
      });
  };

  render() {
    const { rainForecast } = this.state;

    return (
      <View>
        {rainForecast ? (
          <View>
            <Text>{`Previsão de chuvas em ${this.cidade}:`}</Text>
            {console.log(rainForecast.weather[0].description)}
          </View>
        ) : (
          <Text>Carregando...</Text>
        )}
      </View>
    );
  }
}

export default RainForecastApp;

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// import Home from './screens/home';
// import Config from './screens/Config';

// var Stack = createStackNavigator()

// export default function App() {
//   return (
//    <NavigationContainer>
//     <Stack.Navigator>
//     <Stack.Screen name = "Home" component={Home}/>

//     <Stack.Screen name = "Config" component={Config}/>
//     </Stack.Navigator>

//    </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
