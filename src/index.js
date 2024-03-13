import React from "react";
import { AppRegistry, View, SafeAreaView } from "react-native";
import style from "./App.module.css";

const App = () => {
  console.log("style", style);
  return (
    <SafeAreaView>
      <View>
        <View>gvghfhfhf</View>
      </View>
    </SafeAreaView>
  );
};

AppRegistry.registerComponent("App", () => App);

// This check ensures that React Native Web is being used before running the application
// if (typeof document !== 'undefined') {
AppRegistry.runApplication("App", {
  rootTag: document.getElementById("dualitenative"),
});
// }