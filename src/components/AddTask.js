import { StyleSheet, View, TextInput, Button } from 'react-native'
import ButtonPrimary from './ButtonPrimary'

const AddTask = ( { taskTitle, taskDescription, onHandlerTitle, onHandlerDescription, addTask } ) => {
   return (
      <View style={styles.inputContainer}>
         <TextInput
            value={taskTitle}
            onChangeText={onHandlerTitle}
            style={styles.input}
            placeholder="Add a task title"
            placeholderTextColor="lightgray"
            maxLength={20}
            autoCapitalize="words"
         />
         <TextInput
            value={taskDescription}
            onChangeText={onHandlerDescription}
            style={styles.input}
            placeholder="Add a description"
            placeholderTextColor="lightgray"
            autoCapitalize="sentences"
            multiline
            numberOfLines={4}
            maxLength={100}
         />

         <ButtonPrimary title="Add Task" onPress={ addTask } />
      </View>
   )
}

export default AddTask

const styles = StyleSheet.create({
   inputContainer: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: 'blueviolet',
      paddingHorizontal: 10,
      paddingVertical: 20,
      gap: 20
   },
   input: {
      width: "100%",
      color: 'white',
      borderWidth: 1,
      borderRadius: 10,
      borderColor: 'lightgray',
      paddingVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: 'indigo',
      textAlignVertical: 'top',
   }
})