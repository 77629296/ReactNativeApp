import React, {Component} from 'react';
import {
  View, Text, Image, StatusBar, Platform, Animated, Easing
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles, {screenHeight, screenWidth} from "../../style"
import * as Constant from "../../style/constant"

export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.toNext = this.toNext.bind(this);
    this.state = {
        progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    //处理白屏
    // if (Platform.OS === 'android') {
    //     SplashScreen.hide();
    // }
    // //是否登陆，是否用户信息
    // userActions.initUserInfo().then((res) => {
        let res = {
          result: true
        }
        this.toNext(res)
    // });
    Animated.timing(this.state.progress, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
    }).start();
  }

  toNext(res) {
    setTimeout(() => {
        if (res && res.result) {
            Actions.reset("root");
        } else {
            Actions.reset("LoginPage");
        }
    }, 2100);
  }

  render() {
    return <View style={[styles.mainBox, {backgroundColor: Constant.white}]}>
      <View style={[styles.centered, {flex: 1}]}>
        <Text style={{color: 'red'}}>23</Text>
      </View>
    </View>
  }
}