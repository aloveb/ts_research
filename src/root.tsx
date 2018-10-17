import * as React from "react";
import { Component } from "react";
import { View, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import HomeScreen from "./screen/HomeScreen";
import DetailsScreen from "./screen/DetailsScreen";
import FactoryExample from "./screen/mode/factory/Example";
import AdapterExample from "./screen/mode/adapter/Example";
import SingletonExample from "./screen/mode/singleton/Example";

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
  FactoryExample: {
    screen: FactoryExample,
  },
  AdapterExample: {
    screen: AdapterExample,
  },
  SingletonExample: {
    screen: SingletonExample,
  }
}, {
    initialRouteName: "Home",
  });

interface Props {
}

interface State {
}
export default class App extends Component<Props, State> {
  public render() {
    return <RootStack />;
  }
}
