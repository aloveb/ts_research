import * as React from "react";
import { Component } from "react";
import { View, Text, Button } from "react-native";

import APPProps from "../../../base/APPProps";
import APPState from "../../../base/APPState";
import APPComponent from "../../../base/APPComponent";

import MacFactory from "./MacFactory";
import WinFactory from "./WinFactory";
import Type from "./Type";
import OSType from "./OSType";
interface State extends APPState {
  os: OSType;
  type: Type;

}
export default class Example extends APPComponent<APPProps, State> {
  public state: State = {
    os: OSType.WIN,
    type: Type.BORDER
  };

  public getClassName(): string {
    return Example.name;
  }

  public renderContent(): JSX.Element {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {this.renderBySelected()}
        <Button
          title="create win button"
          onPress={() => this.clickFatory(Type.BUTTON, OSType.WIN)}
        />
        <Button
          title="create mac button"
          onPress={() => this.clickFatory(Type.BUTTON, OSType.MAC)}
        />
        <Button
          title="create win border"
          onPress={() => this.clickFatory(Type.BORDER, OSType.WIN)}
        />
        <Button
          title="create mac border"
          onPress={() => this.clickFatory(Type.BORDER, OSType.MAC)}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }

  private clickFatory(type: Type, os: OSType): void {
    this.setState({
      os: os,
      type: type
    });
  }

  private renderBySelected(): JSX.Element {
    const { os, type } = this.state;
    const returnView = os === OSType.MAC ? MacFactory.create(type) : WinFactory.create(type);
    return returnView;
  }
}
