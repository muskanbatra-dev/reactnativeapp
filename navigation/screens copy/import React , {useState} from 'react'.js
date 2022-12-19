import React , {useState} from 'react'

import {
    SafeAreaView , StyleSheet ,View , Text , 
    Flatlist , Modal , TextInput, TouchableOpacity
} from 'react-native'



const UserProfile = () =>{
    

    const DATA = [
        {id:1,text:'muskan',bio:'react'},
        {id:2,text:'satish',bio:'python'},
        {id:3,text:'ram',bio:'node js'},
        {id:4,text:'sam',bio:'react native'},
    
    ]
    const [data,setdata] = useState(DATA)
    const [isRender,setisRender] = useState(false);
    const [isModalVisible,setisModalVisible] = useState(false);
    const [inputText,setinputText] = useState();
    const [edit,setEditItem] = useState();

    const onPressItem = () =>{
        setisModalVisible(true)
        setinputText(item.text)
        setEditItem(item.id)
    }

    const renderItem = ({item,index})=>{
        <TouchableOpacity
        style={styles.item}
        onPress={() => onPressItem(item)}>
            <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
    }
    return(
        <SafeAreaView style={styles.container}>
            <Flatlist
            data={data}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={renderItem}
            extraData={isRender}/>

            <Modal
            animationType='fade'
            visible={isModalVisible}
            onRequestClose={() => setisModalVisible(false)}>

            <View style={styles.modalView}>
                <Text style={styles.text}>Change Text:</Text>

                <TextInput style={styles.textInput}
                onChangeText={(text) => setinputText(text)}
                defaultValue={inputText}
                editable={true}
                multiline={false}
                maxLength={200}/>

                <TouchableOpacity
                onPress={() => onPressSaveEdit()}
                style={styles.touchableSave}>

                    <Text style={styles.text}>Save</Text>

                </TouchableOpacity>

                
            </View>

            </Modal>
            

        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container:{
        flex:1

    },

    item:{
        borderBottomWidth:1,
        borderBottomColor: 'gray',
        alignItems:'center',

    },
    text:{
        marginVertical:1,
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft:10

    },
    textInput:{
        marginVertical:1,
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft:10

    },
    modalView:{
       flex:1,
       alignItems:'center',
       justifyContent:'center'

    },
    touchableSave:{
        backgroundColor:'orange',
        paddingHorizontal:100,
        alignItems:'center',
        marginTop:20

    },




})
export default UserProfile;