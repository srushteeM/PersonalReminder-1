import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';


import db from '../config';
import firebase from 'firebase';

export default class AddTask extends Component {
    constructor(){
        super();
        this.state ={
          userId : firebase.auth().currentUser.email,
          task: "",
         status:"",
          requestId:"",
          userDocId: '',
          docId :'',
          date:""
        }
      }
      createUniqueId(){
        return Math.random().toString(36).substring(7);
      }
      addTask = async (task,date)=>{
        var userId = this.state.userId
        var randomRequestId = this.createUniqueId()
        db.collection('task_list').add({
            "user_id": userId,
            "task":task,
            "request_id"  : randomRequestId,
            "status" : "incomplete",
             "date"       : date
    
        })
    
       
    
        this.setState({
            task :'',
           date : '',
            requestId: randomRequestId
        })
    
        return Alert.alert("Task Added Successfully")
    
    
      }
    
    render() {
        return (
            <View style={{flex:1}}>
 <KeyboardAvoidingView style={styles.keyBoardStyle}>
 <TextInput
                style ={styles.formTextInput}
                placeholder={"enter task"}
                onChangeText={(text)=>{
                    this.setState({
                        task:text
                    })
                }}
                value={this.state.task}
              />
               <TextInput
                style ={styles.formTextInput}
                placeholder={"enter date"}
                onChangeText={(text)=>{
                    this.setState({
                        date:text
                    })
                }}
                value={this.state.date}
              />
                <TouchableOpacity
                style={styles.button}
                onPress={()=>{ this.addTask(this.state.task,this.state.date);
                }}
                >
                <Text>Submit</Text>
              </TouchableOpacity>
               </KeyboardAvoidingView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )
  