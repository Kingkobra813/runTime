import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import TimerCountdown from "react-native-timer-countdown";

class OptionScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startTime: "",
      isPressed: false
    };
  }
  handleStartRunning = value => {
    console.log("startRunning", value);
  };

  render() {
    let runningTime = [{ value: "1 Minute" }, { value: "2 Minutes" }];
    let walkingTime = [{ value: "1 Minute" }, { value: "2 minutes" }];
    return (
      <View>
        <Text>Running Time</Text>
        <Dropdown
          label="Running Time"
          data={runningTime}
          onChangeText={value => this.handleStartRunning(value)}
        />
        <Text>Walking Time</Text>
        <Dropdown label="Walking Time" data={walkingTime} />
        <TimerCountdown
          initialMilliseconds={this.state.isPressed ? 1000 * 60 : 1000 * 0}
          onTick={milliseconds => console.log("tick", milliseconds)}
          onExpire={() => console.log("complete")}
          formatMilliseconds={milliseconds => {
            const remainingSec = Math.round(milliseconds / 1000);
            const seconds = parseInt((remainingSec % 60).toString(), 10);
            const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
            const hours = parseInt((remainingSec / 3600).toString(), 10);
            const s = seconds < 10 ? "0" + seconds : seconds;
            const m = minutes < 10 ? "0" + minutes : minutes;
            let h = hours < 10 ? "0" + hours : hours;
            h = h === "00" ? "" : h + ":";
            return h + m + ":" + s;
          }}
          allowFontScaling={true}
          style={{ fontSize: 20 }}
        />
        <Button
          title={`${this.state.isPressed ? "Running" : "Start running"}`}
          onPress={() => {
            console.log(this.startTime);
            this.setState({ isPressed: true });
          }}
        />
        <Button
          title="Stop"
          onPress={() => {
            this.setState({ isPressed: false });
          }}
        />
      </View>
    );
  }
}

export default OptionScreen;
