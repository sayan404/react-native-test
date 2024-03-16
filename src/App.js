import React, { Component } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import styles from "./App.css";
import { Text, View } from "react-native-web";
console.log("styles", styles);
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View className={styles.frame}>
          <Text className={styles.rectangle}>hbjxvjbbfbs</Text>
        </View>
      </SafeAreaView>
    );
  }
}
//     <View style={{backgroundColor : 'red' , height : "500px" , width : "400px"}} ><View className={styles.rectangle}></View></View>
