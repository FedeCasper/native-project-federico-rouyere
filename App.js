import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [ newTask, setNewTask ] = useState({
    title: '',
    description: ''
  })
  const [ tasks, setTasks ] = useState([])

  const addTask = () => {
    setTasks([...tasks, newTask])
    setNewTask({ title: '', description: '' }) // Reset the input
  }

  const onHandlerTitle = (title_) => {
    setNewTask({ ...newTask, title: title_ })
  }

  const onHandlerDescription = (description_) => {
    setNewTask({ ...newTask, description: description_ })
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          value={newTask.title} 
          onChangeText={ onHandlerTitle } 
          style={styles.input} 
          placeholder="Add a task title" 
          placeholderTextColor="white"
        />
        <TextInput 
          value={newTask.description} 
          onChangeText={ onHandlerDescription } 
          style={styles.input} 
          placeholder="Add a task descriptiom" 
          placeholderTextColor="white"
        />
        <Button color="#36E0C6" title="Add" onPress={addTask}/>
      </View>
      <ScrollView style={styles.tasksContainer}>
        {
          tasks.map((task, index) => {
            return (
              <View key={index} style={styles.taskCard}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <Text style={styles.taskDescription}>{task.description}</Text>
                <Button color="#E06736" title="Delete"/>
              </View>
            )
          })
        }
      </ScrollView>
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
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#6B508B',
  },
  input:{
    width: 250,
    borderBottomWidth: 2,
    borderColor: 'gray',
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  tasksContainer:{
    padding: 10,
  },
  taskCard:{
    backgroundColor: 'blueviolet',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
    gap: 10
  },
  taskTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    color: "white",
  },
  taskDescription:{
    fontSize: 16,
    width: "70%",
    color: "white",
    textAlign: 'center',
  },


});
