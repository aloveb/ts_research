import * as React from "react";
import { Component } from "react";
import { View, Text, Button } from "react-native";
import APPComponent from "../base/APPComponent";

interface Props {
    navigation: any;
}

interface State {
}
class HomeScreen extends APPComponent<Props, State> {
    public renderContent() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

export default HomeScreen;