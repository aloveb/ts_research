"use strict";
import * as React from "react";
import { Component } from "react";
import { View, Text } from "react-native";

abstract class AppComponent<P, S> extends Component<P, S> {
	static navigationOptions = ({ navigation }) => {
		const { params } = navigation.state;

		return {
			title: params ? params.title : 'A Nested Details Screen',
			headerStyle: {
				backgroundColor: '#f4511e',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			}
		}
	};


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
}

export default AppComponent;