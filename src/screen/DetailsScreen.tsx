import * as React from "react";
import { Component } from "react";
import { View, Text } from "react-native";
import APPComponent from "../base/APPComponent";

interface Props {
  visible: boolean;
  hideModal?: boolean; //隐藏背景，让页面上出现loading的同时其他按钮也是可以点击的，默认为false
}

interface State {
  modalVisible: boolean;
}

export default class DetailsScreen extends APPComponent<Props, State> {
  renderContent() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}