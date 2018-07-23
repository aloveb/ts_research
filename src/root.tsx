import * as React from "react";
import { Component } from "react";
import { View, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import HomeScreen from "./screen/HomeScreen"
import DetailsScreen from "./screen/DetailsScreen"
import FactoryExample from "./screen/mode/factory/Example"

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
  FactoryExample: {
    screen: FactoryExample,
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