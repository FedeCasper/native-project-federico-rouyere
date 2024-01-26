import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Add a task"/>
        <Button title="Add"/>
      </View>
      <View style={styles.tasksContainer}>
        <View>
          <Text style={styles.text}>Tarea 1</Text>
          <Button title="Delete"/>
        </View>
        <View>
          <Text style={styles.text}>Tarea 2</Text>
          <Button title="Delete"/>
        </View>
        <View>
          <Text style={styles.text}>Tarea 3</Text>
          <Button title="Delete"/>
        </View>
        <View>
          <Text style={styles.text}>Tarea 4</Text>
          <Button title="Delete"/>
        </View>
      </View>
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
    paddingTop: 30,
  },
  inputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input:{
    width: 250,
    borderWidth: 2,
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  text:{
    fontSize: 16,
  },
  tasksContainer:{
    backgroundColor: 'blueviolet',
    alignItems: 'center',
    gap: 25,
    padding: 10,
  }

});
