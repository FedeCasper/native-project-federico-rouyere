import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder="Add a task"/>
        <Button title="Add"/>
      </View>
      <View>
        <Text>Tarea 1</Text>
        <Text>Tarea 2</Text>
        <Text>Tarea 3</Text>
        <Text>Tarea 4</Text>
      </View>
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
