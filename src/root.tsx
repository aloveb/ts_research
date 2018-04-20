import * as React from "react";
import { Component } from "react";
import { View, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import HomeScreen from "./screen/HomeScreen"
import DetailsScreen from "./screen/DetailsScreen"

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  }
}, {
    initialRouteName: "Home",
  });


interface Props {
}

interface State {
}
export default class App extends Component<Props, State> {
  render() {
    return <RootStack />;
  }
}