import * as React from "react";
import { View, Text, Button } from "react-native";

import APPComponent from "../base/APPComponent";
import APPProps from "../base/APPProps";
import APPState from "../base/APPState";

interface Props extends APPProps {
}

interface State extends APPState {
}
export default class DetailsScreen extends APPComponent<Props, State> {
  public renderContent() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({ title: "Updated!" })}
        />
      </View>
    );
  }
}
