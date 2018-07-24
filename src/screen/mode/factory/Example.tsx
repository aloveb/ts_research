import * as React from "react";
import { Component } from "react";
import { View, Text, Button } from "react-native";

import APPProps from "../../../base/APPProps";
import APPState from "../../../base/APPState";
import APPComponent from "../../../base/APPComponent";

import MacFactory from "./MacFactory";
import WinFactory from "./WinFactory";

interface State extends APPState{
    text: string;
}
export default class Example extends APPComponent<APPProps, State> {
 static state:State = {
     text: 'empty'
 }
  
  private clickFatory(type: 'button' | 'border', os: 'win' | 'mac'): void {
    
    this.setState({
        text: os.concat('-').concat(type)
    });
  }

  public renderContent(): JSX.Element {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Factory Example</Text>
        <Text>{this.state.text}</Text>
        <Button
          title="create win button"
          onPress={() => this.clickFatory('button', 'win')}
        />
        <Button
          title="create mac button"
          onPress={() => this.clickFatory('button', 'mac')}
        />
        <Button
          title="create win border"
          onPress={() => this.clickFatory('border', 'win')}
        />
        <Button
          title="create mac border"
          onPress={() => this.clickFatory('border', 'mac')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}