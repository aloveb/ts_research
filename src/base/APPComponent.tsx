"use strict";
import * as React from "react";
import { Component } from "react";
import { View, Text } from "react-native";

abstract class AppComponent<P, S> extends Component<P, S> {
	public render(): any {
		return (
			<View style={[{flex: 1, justifyContent: "flex-start", alignItems: "flex-start", flexDirection: "column"}]}>
				<View style={{ width: "100%", flex: 1}} >
				{this.renderContent()}
				</View>
			</View>
		);
	}

	//如果你想要覆盖数据,并且有根下划线在顶部
    public abstract renderContent(): any;

}

export default AppComponent;