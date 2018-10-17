import * as React from "react";
import { View, Button } from "react-native";

import APPProps from "../../../base/APPProps";
import APPState from "../../../base/APPState";
import APPComponent from "../../../base/APPComponent";

import Logger from "./Logger";

export default class Example extends APPComponent<APPProps, APPState> {
  public logger = Logger.getInstance<Example>(this);
  public renderContent(): JSX.Element {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="日志记录info"
          onPress={() => this.log(1)}
        />
        <Button
          title="日志记录warn"
          onPress={() => this.log(2)}
        />
        <Button
          title="日志记录error"
          onPress={() => this.log(3)}
        />
        <Button
          title="日志读取"
          onPress={() => this.show()}
        />
        <Button
          title="返回"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }

  public getClassName(): string {
    return "log." + Example.name;
  }

  private log(type: 1 | 2 | 3): void {
    if (type === 1) {
      this.logger.info("info test");
    } else if (type === 2) {
      this.logger.warn("warn test");
    } else if (type === 3) {
      this.logger.error("warn test");
    }
  }

  private show(): void {
    // this.logger.info("dfdfd");
  }
}
