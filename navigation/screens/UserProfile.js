import React, {useState} from 'react'
import {
    StyleSheet ,View , Text , 
    FlatList , Modal , TextInput, TouchableOpacity, SafeAreaView,StatusBar
} from 'react-native'



  
  
const UserProfile = () => {
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'muskaHn',
          bio: 'react js',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'xabc',
          bio: 'reacts native',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'satis',
          bio: 'python',
        },
      ];

    const [data,setdata] = useState(DATA)
    const [isRender,setisRender] = useState(false);
    const [isModalVisible,setisModalVisible] = useState(false)
    const [inputText,setinputText] = useState()
    const [editItem,setEditItem] = useState()

    const Item = ({ title , bio }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      );
      

    const onPressItem = (item) =>{
        setisModalVisible(true)
        setinputText(item.title)
        setEditItem(item.id)
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item}
        onPress={() => onPressItem(item)}>
        <Item title={item.title} bio={item.bio}/>
        </TouchableOpacity>
    
      );

    const handleEditItem = (editItem) =>{
        const newData = data.map(item => {
            if (item.id == editItem){
                item.title = inputText;
                return item;
            }
            return item
        })
        setdata(newData)
        setisRender(!isRender)
    }

    const onPressSaveEdit = () => {
        handleEditItem(editItem)
        setisModalVisible(false)

    }
    
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            extraData={isRender}
          />

          <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={()=>setisModalVisible(false)}>

            <View style={styles.modalView}>
                <Text style={styles.text}>Change Text:</Text>

                <TextInput style={styles.textInput}
                onChangeText={(title) => setinputText(title)}
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
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#0AA5F2',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
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
       justifyContent:'center',
       backgroundColor:'#FFFDD0',
       margin:60

    },
    touchableSave:{
        backgroundColor:'green',
        paddingHorizontal:100,
        alignItems:'center',
        marginTop:20

    },

    

  });

export default UserProfile




