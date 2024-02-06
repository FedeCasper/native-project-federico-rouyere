import { StyleSheet, View, Dimensions, Keyboard  } from 'react-native';
import React, { useState, useEffect } from 'react';
import ModalDelteTask from './src/components/ModalDelteTask';
import AddTask from './src/components/AddTask';
import ListTasks from './src/components/ListTasks';
import ListLorems from './src/components/ListLorems';


const App = () => {

   const [modalVisible, setModalVisible] = useState(false)
   const [taskSelected, setTaskSelected] = useState({})
   const [taskTitle,  setTaskTitle] = useState('')
   const [taskDescription,  setTaskDescription] = useState('')
   const [tasks, setTasks] = useState([])
   const screenWidth = Dimensions.get('window').width
   const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)
   const [lorems, setLorems] = useState([
      {
         id: 1,
         title: 'Donec quis dui at dolor tempor interdum.',
         body: 'Pellentesque ut neque. Pellentesque habitant morbi tristique.'
      },
      {
         id: 2,
         title: 'Cras ornare.',
         body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.'
      },
      {
         id: 3,
         title: 'Vestibulum commodo felis quis tortor.',
         body: 'S Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.'
      }
   ])


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

   const addExampleCard = (item) => {
      const exampleTask = { 
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
         title: item.title, 
         description: item.body
      }
      setTasks([...tasks, exampleTask])
   }

   useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
         setIsKeyboardVisible(true);
        }
      );
  
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
         setIsKeyboardVisible(false);
        }
      );
  
      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      };
    }, []);


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

         {
            isKeyboardVisible ? null : (
               <ListLorems
                  lorems={lorems}
                  addExampleCard={addExampleCard}
                  screenWidth={screenWidth}
               />
            )
         }


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
