import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Native World!</Text>
      <Text style={styles.subtitle}>Federico Rouyere</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8c8c8c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: '#4c007d',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 30
  },
  subtitle:{
    color: '#4c007d',
    fontSize: 20
  }
});
