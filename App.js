import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import OptionScreen from "./screens/OptionScreen";

class App extends Component {
  getStartedPress = () => {
    const { navigate } = this.props.navigation;
    navigate("OptionScreen");
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

const MainNavigator = createStackNavigator({
  Main: { screen: App },
  OptionScreen: { screen: OptionScreen }
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
