import * as React from "react";
import { Component } from "react";
import { View, Text, Button } from "react-native";

import APPProps from "../../../base/APPProps";
import APPState from "../../../base/APPState";
import APPComponent from "../../../base/APPComponent";

import Adapter from "./Adapter";
interface State extends APPState{
  type: number;
}
export default class Example extends APPComponent<APPProps, State> {
  private adapter = new Adapter();
  public state: State = {
    type: -1
 }
  
  private clickFatory(type: number): void {
    this.setState({
      type
    });
  }

  private renderBySelected(): JSX.Element {
    const { type } = this.state;
    let view = null;
    if( type === 0 ) {
      view = this.adapter.method1();
    } else  if( type === 1 ){
      view = this.adapter.method2();
    }
    return view;
  }

  public renderContent(): JSX.Element {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.renderBySelected()}
        <Button
          title="method1"
          onPress={() => this.clickFatory(0)}
        />
        <Button
          title="method2"
          onPress={() => this.clickFatory(1)}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}