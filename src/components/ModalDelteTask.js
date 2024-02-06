import { StyleSheet, Text, View, Modal, Button } from 'react-native'

const ModalDelteTask = ( { modalVisible, setModalVisible, taskSelected, deleteTask } ) => {
   return (
      <Modal
         visible={modalVisible}
         animationType="slide"
         onRequestClose={ () => setModalVisible(!modalVisible) } 
         >
         <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Are you sure?! Task {taskSelected.title} wil be deleted.</Text>
            <View style={styles.buttonsContainer}>
               <Button color="#E06736" title="Yes" onPress={ () => deleteTask(taskSelected.id) } />
               <Button color="#E06736" title="No" onPress={ () => setModalVisible(!modalVisible) } />
            </View>
         </View>
      </Modal>
   )
}

export default ModalDelteTask

const styles = StyleSheet.create({
   modalContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'indigo',
      padding: 20,
      gap: 10
   },
   modalTitle: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      fontStyle: 'italic'
   },
   buttonsContainer: {
      
      flexDirection: 'row',
      gap: 10
   }
})