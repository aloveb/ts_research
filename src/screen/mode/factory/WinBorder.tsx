import Border from "./Border";
import * as React from "react";
import { Text } from "react-native";

export default class WinBorder implements Border {
    public view(): JSX.Element {
        return <Text>{'win border'}</Text>;
    }
}