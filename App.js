import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, Modal } from 'react-native';
import React, { useState } from 'react';


const App = () => {

   const [modalVisible, setModalVisible] = useState(false)
   const [newTask, setNewTask] = useState({
      id: '',
      title: '',
      description: ''
   })
   const [tasks, setTasks] = useState([])
   const [selectedId, setSelectedId] = useState(null)

   const addTask = () => {
      setTasks([...tasks, newTask])
      setNewTask({ title: '', description: '' }) // Reset the input
   }

   const onHandlerTitleAndId = (title_) => {
      setNewTask({ ...newTask, title: title_, id: Math.floor(Math.random() * 1000).toString() })
   }

   const onHandlerDescription = (description_) => {
      setNewTask({ ...newTask, description: description_ })
   }

   const modalTrigger = (id) => {
      setSelectedId(id)
      setModalVisible(!modalVisible)
   }

   const deleteTask = (id) => {
      setTasks( tasks.filter( (task) => task.id !== id ) )
      setModalVisible(!modalVisible)
   }

   return (
      <View style={styles.container}>
         <View style={styles.inputContainer}>
            <TextInput
               value={newTask.title}
               onChangeText={onHandlerTitleAndId}
               style={styles.input}
               placeholder="Add a task title"
               placeholderTextColor="white"
            />
            <TextInput
               value={newTask.description}
               onChangeText={onHandlerDescription}
               style={styles.input}
               placeholder="Add a task descriptiom"
               placeholderTextColor="white"
            />
            <Button color="#36E0C6" title="Add" onPress={addTask} />
         </View>
         <View style={styles.tasksContainer}>
            <FlatList
               data={tasks}
               keyExtractor={(item) => item.id}
               renderItem={({ item }) => (
                  <View key={item.id} style={styles.taskCard}>
                     <Text style={styles.taskTitle}>{item.title}</Text>
                     <Text style={styles.taskDescription}>{item.description}</Text>
                     <Button
                        color="#E06736"
                        title='Delete'
                        onPress={ () => modalTrigger(item.id) }
                     />
                  </View>
               )}
            />
            <Modal
               visible={modalVisible}
               animationType="slide"
               transparent
            >
               <View style={styles.modalContainer}>
                  <Text style={styles.taskTitle}>Are you sure?!</Text>
                  <Button color="#E06736" title="Yes" onPress={ () => deleteTask(selectedId) } />
                  <Button color="#E06736" title="No" onPress={ () => setModalVisible(!modalVisible) } />
               </View>
            </Modal>
         </View>
      </View>
   );
}

export default App

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#E5E5E5',
      flex: 1,
      paddingTop: 40,
   },
   inputContainer: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: '#6B508B',
      padding: 10,
   },
   input: {
      width: 250,
      borderBottomWidth: 2,
      borderColor: 'gray',
      margin: 10,
      paddingVertical: 5,
      paddingHorizontal: 10,
   },
   tasksContainer: {
      padding: 10,
      alignItems: 'center',
      backgroundColor: '#fff0ff',
      flex: 1
   },
   taskCard: {
      backgroundColor: 'blueviolet',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginBottom: 20,
      gap: 10,
      width: 350,
   },
   taskTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: "white",
   },
   taskDescription: {
      fontSize: 16,
      fontStyle: 'italic',
      width: "70%",
      color: "white",
      textAlign: 'center',
   },
   modalContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'indigo',
      padding: 20,
      gap: 10
   },



});
