import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Dropdown } from "react-native-material-dropdown";

class OptionScreen extends Component {
  handleStartRunning = () => {
    console.log("startRunning");
  };

  render() {
    let runningTime = [{ value: "1 Minute" }, { value: "2 Minutes" }];
    let walkingTime = [{ value: "1 Minute" }, { value: "2 minutes" }];
    return (
      <View>
        <Text>Running Time</Text>
        <Dropdown label="Running Time" data={runningTime} />
        <Text>Walking Time</Text>
        <Dropdown label="Walking Time" data={walkingTime} />
        <Button title="Start running" onPress={this.handleStartRunning} />
      </View>
    );
  }
}

export default OptionScreen;
