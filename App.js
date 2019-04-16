import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class App extends React.Component {
  getStartedPress = () => {
    console.log("pressed");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>runTime!</Text>
        <View>
          <Button onPress={this.getStartedPress} title="Get Started" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
