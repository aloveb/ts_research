"use strict";
import * as React from "react";
import { Component } from "react";
import { View, Text } from "react-native";
import Page from "./Page";

abstract class AppComponent<P, S> extends Component<P, S> implements Page {
	public static navigationOptions = ({ navigation }) => {
		const { params } = navigation.state;

		return {
			title: params ? params.title : "Home Screen",
			headerStyle: {
				backgroundColor: "#f4511e",
			},
			headerTintColor: "#fff",
			headerTitleStyle: {
				fontWeight: "bold",
			}
		};
	}

	public render(): any {
		return (
			<View style={[{ flex: 1, justifyContent: "flex-start", alignItems: "flex-start", flexDirection: "column" }]}>
				<View style={{ width: "100%", flex: 1 }} >
					{this.renderContent()}
				</View>
			</View>
		);
	}

	//自定义的render方法，重写了render
	public abstract renderContent(): any;
	// public abstract getClassName(): string;
	public getClassName(): string {
		return AppComponent.name;
	  }
}

export default AppComponent;
