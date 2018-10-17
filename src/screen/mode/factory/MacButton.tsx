import Button from "./Button";
import * as React from "react";
import { Text } from "react-native";

export default class MacButton implements Button {
    public view(): JSX.Element {
        return <Text>{"mac button"}</Text>;
    }
}
