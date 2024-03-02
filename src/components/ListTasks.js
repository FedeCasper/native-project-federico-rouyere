import { StyleSheet, View, FlatList } from 'react-native'
import CardTaskList from './CardTaskList'

const ListTasks = ({ tasks, modalTrigger, markAsComplete }) => {
   return(
      <View style={styles.tasksContainer}>
         <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (

               <CardTaskList
                  item={item}
                  modalTrigger={modalTrigger}
                  markAsComplete={markAsComplete}
                  />
            )}
         />
      </View>
   )

}

export default ListTasks

const styles = StyleSheet.create({
   tasksContainer: {
      padding: 10,
      alignItems: 'center',
      backgroundColor: '#fff0ff',
      flex: 1
   }
})