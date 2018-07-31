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
                <Button
                    title="抽象工厂"
                    onPress={() => this.props.navigation.navigate('FactoryExample')}
                />
                <Button
                    title="适配器"
                    onPress={() => this.props.navigation.navigate('AdapterExample')}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

export default HomeScreen;