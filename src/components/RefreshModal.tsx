// import * as React from "react";
// import { Component } from "react";
// import { ActivityIndicator, Modal, TouchableHighlight } from "react-native";
// import * as Constants from "../lib/Constants";

// interface Props {
//     visible: boolean;
//     hideModal?: boolean; //隐藏背景，让页面上出现loading的同时其他按钮也是可以点击的，默认为false
// }

// interface State {
//     modalVisible: boolean;
// }

// class RefreshModal extends Component<Props, State> {
//     public state: State = {
//         modalVisible: this.props.visible
//     };
//     constructor(props) {
//         super(props);
//     }

//     public componentWillReceiveProps(newProps: Props): void {
//         this.setState({ modalVisible: newProps.visible });
//     }

//     /**
//      * 关掉modal
//      * @param isClose 是否关闭
//      */
//     public closeModal(isClose: boolean) : void {
//         this.setState({ modalVisible: !isClose });
//     }

//      /**
//       * @description 由于modal的load会影响IOS下面所有message或者notification的弹出效果，故删去Modal，用全局的布局实现modal效果
//       * @author i347933
//       */
//     public render(): JSX.Element {
//         let style: any = this.props.hideModal ? {
//             top: (Constants.SCREEN_HEIGHT / 2 - 18),
//             left: (Constants.SCREEN_WIDTH / 2 - 18),
//             height: 36,
//             width:  36,
//             position: "absolute",
//             zIndex: 999,
//             display: this.state.modalVisible ? "flex" : "none"
//         } : {
//             height: "100%",
//             width:  "100%",
//             position: "absolute",
//             zIndex: 999,
//             display: this.state.modalVisible ? "flex" : "none"};

//         return <ActivityIndicator
//             animating={this.state.modalVisible}
//             style={style}
//             size="large"
//         />;
//     }
// }

// export default RefreshModal;
