import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import style from './App.module.css'
export default function App() {
  return (
    <View 
    style={style.frame}
    // style={{
    //   position: "absolute",
    //   backgroundColor: '#ff0000',
    //   height: 300,
    //   width: 5000
    // }}
    >
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: '#ff0000',
    height: 300,
    width: 5000
  },
});
