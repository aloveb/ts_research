import * as React from "react";
import { Component } from "react";
import { View, Text, Button } from "react-native";

import APPComponent from "../base/APPComponent";
import APPProps from "../base/APPProps";
import APPState from "../base/APPState";
interface Props extends APPProps{
}

interface State extends APPState{
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
                <Button
                    title="抽象工厂的例子"
                    onPress={() => this.props.navigation.navigate('FactoryExample')}
                />
            </View>
        );
    }
}

export default HomeScreen;