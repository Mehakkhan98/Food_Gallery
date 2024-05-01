import React,{useEffect} from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {buttonColor}from "../res/styles/color";
import { useSelector } from 'react-redux';
import {collection,query,orderBy,onSnapshot,serverTimestamp} from '@react-native-firebase/firestore';
import {auth,database}from '../Firebase/Firebase';
import { useTheme } from 'react-native-paper';

const ChatScreen = () => {
  const {colors}=useTheme();
  const [messages, setMessages] = React.useState([]);
  const [newMessage, setNewMessage] = React.useState('');
  const User = useSelector((state) => state.cart.user);
  let user = User && User.length > 0 ? User[0].data : null;
  let userName= user && user.username.length > 0?user.username:"";
  useEffect(() => {
    const collectionRef = collection(database,  user.username.toString());
    const q = query(collectionRef, orderBy('createdAt', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(messages);
    });
    return () => unsubscribe();
  },[]);
 
  const handleSend = () => {
    if (newMessage.trim() === '') return;
    const time=serverTimestamp();
    collection(database, userName.toString()).add({
      id: messages.length + 1,
      text: newMessage,
      sender: userName,
      createdAt: time,
    })
    setNewMessage('');
     
  };

  const renderMessage = ({ item }) => {
    const formattedDate = item.createdAt?.toDate()?.toLocaleString();

   return (<>
    <View 
    style={item.sender === userName ? 
    {...styles.userMessage,backgroundColor:colors.userMsgColor} 
    : 
    {...styles.adminMessage,backgroundColor:colors.adminMsgColor}}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
    <View style={item.sender === userName ? styles.userTimeStamp : styles.adminTimeStamp}> 
     <Text style={styles.timeStampText}>{formattedDate}</Text>
     </View>
  
    </>
   
  )
    }

  return (
    <View style={{...styles.container,backgroundColor:colors.backgroundColor}}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMessage}
        style={styles.messagesList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <TouchableOpacity style={{...styles.sendButton,backgroundColor:colors.buttonColor}} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messagesList: {
    flex: 1,
    padding: 10,
  },
  userTimeStamp: {
    alignSelf: 'flex-end',
    borderRadius: 8,
    marginVertical: 1,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    maxWidth: '80%',
  },
  adminMessage: {
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    maxWidth: '80%',
  },
  adminTimeStamp: {
    alignSelf: 'flex-start',
    borderRadius: 8,
    marginVertical: 1,
    maxWidth: '80%',
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
  timeStampText: {
    color: 'gray',
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ChatScreen;
