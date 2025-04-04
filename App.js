import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ScrennHome from './src/ScreenHome';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

     <ScrennHome/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});