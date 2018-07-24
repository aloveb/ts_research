import Border from "./Border";
import * as React from "react";
import { Text } from "react-native";

export default class MacBorder implements Border {
    public view(): JSX.Element {
       return <Text>{'mac border'}</Text>;
    }
}