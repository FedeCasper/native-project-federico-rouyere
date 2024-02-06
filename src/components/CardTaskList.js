import { StyleSheet, Text, View, Switch } from 'react-native'
import ButtonPrimary from './ButtonPrimary'

const CardTaskList = ({ item, modalTrigger, markAsComplete }) => {
   return (
      <View key={item.id} style={styles.taskCard}>
         <Text style={styles.taskTitle}>{item.title}</Text>
         <Text style={styles.taskDescription}>{item.description}</Text>

         <View style={styles.dateContainer}>
            <Text style={styles.taskDates}>Creation: {item.create_at}</Text>
            <Text style={styles.taskDates}>Update: {item.update_at}</Text>
         </View>

         <View style={styles.completedContainer}>
            <Switch value={item.completed} onValueChange={ () => markAsComplete(item.id) }/>
            <Text style={styles.completedText}>{item.completed ? 'Complete' : 'Not Complete'}</Text>
         </View>

         <ButtonPrimary title='Delete' onPress={ () => modalTrigger(item) }/>
      </View>
   )
}

export default CardTaskList

const styles = StyleSheet.create({
   taskCard: {
      backgroundColor: 'indigo',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginBottom: 20,
      gap: 10,
      width: 400
   },
   taskTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: "white",
   },
   taskDescription: {
      fontSize: 16,
      fontStyle: 'italic',
      width: "90%",
      color: "white",
      textAlign: 'center',
      marginBottom: 20
   },
   taskDates: {
      justifyContent: 'center',
      alignItems: 'center',
      color: 'lightgray',
      backgroundColor: 'blueviolet',
      padding: 5,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: 'blueviolet',
   },
   dateContainer: {
      flexDirection: 'row',
      gap: 10
   },
   completedContainer: {
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center'
   },
   completedText: {
      color: 'lightgray',
      fontWeight: 'bold',
      fontSize: 16
   }
})