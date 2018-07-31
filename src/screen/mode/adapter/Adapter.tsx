import * as React from "react";
import { Text } from "react-native";
import BeAdapted from "./BeAdapted";
import TargetInterface from "./TargetInterface";

export default class Adapter extends BeAdapted implements TargetInterface {
    public method2(): JSX.Element {
        return <Text>{'Adapter method2'}</Text>;
    }
}