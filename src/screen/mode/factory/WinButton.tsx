import Button from "./Button";
import * as React from "react";
import { Text } from "react-native";

export default class WinButton implements Button {
    public view(): JSX.Element {
        return <Text>{'win button'}</Text>;
    }
}