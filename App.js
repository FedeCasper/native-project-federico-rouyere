import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, Modal } from 'react-native';
import React, { useState } from 'react';
import ModalDelteTask from './src/components/ModalDelteTask';
import AddTask from './src/components/AddTask';
import ListTasks from './src/components/ListTasks';


const App = () => {

   const [modalVisible, setModalVisible] = useState(false)
   const [taskSelected, setTaskSelected] = useState({})
   const [taskTitle,  setTaskTitle] = useState('')
   const [taskDescription,  setTaskDescription] = useState('')
   const [tasks, setTasks] = useState([])



   const addTask = () => {
      const newTask = { 
         id: Math.floor(Math.random() * 1000).toString(), 
         create_at: new Date().toLocaleString(
            'es-ES', {
               day: 'numeric',
               month: 'numeric',
               year: 'numeric',
               hour12: false,
               hour: 'numeric',
               minute: 'numeric',
            }
         ),
         update_at: new Date().toLocaleString(
            'es-ES', {
               day: 'numeric',
               month: 'numeric',
               year: 'numeric',
               hour12: false,
               hour: 'numeric',
               minute: 'numeric',
            }
         ),
         completed: false,
         title: taskTitle, 
         description: taskDescription
      }
      setTasks([...tasks, newTask])
      setTaskTitle('')
      setTaskDescription('')
   }

   const onHandlerTitle = (title_) => {
      setTaskTitle(title_)
   }

   const onHandlerDescription = (description_) => {
      setTaskDescription(description_)
   }

   const modalTrigger = (item) => {
      setTaskSelected(item)
      setModalVisible(!modalVisible)
   }

   const deleteTask = (id) => {
      setTasks( tasks.filter( (task) => task.id !== id ) )
      setModalVisible(!modalVisible)
   }

   const markAsComplete = (id) => {
      setTasks( tasks.map( (task) => task.id === id ? { ...task, completed: !task.completed } : task ) )
   }

   return (
      <View style={styles.container}>

         <AddTask
            taskTitle={taskTitle}
            taskDescription={taskDescription}
            onHandlerTitle={onHandlerTitle}
            onHandlerDescription={onHandlerDescription}
            addTask={addTask}
         />

         <ListTasks
            tasks={tasks}
            modalTrigger={modalTrigger}
            markAsComplete={markAsComplete}
         />

         <ModalDelteTask
            modalVisible={modalVisible}
            taskSelected={taskSelected}
            deleteTask={deleteTask}
            setModalVisible={setModalVisible}
            />
            
      </View>
   );
}

export default App

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#E5E5E5',
      flex: 1,
      paddingTop: 40,
   }
});
