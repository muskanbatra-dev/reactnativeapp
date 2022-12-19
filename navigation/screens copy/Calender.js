import React, { useState } from 'react'
import { View , Text, SafeAreaView, Button , StyleSheet} from 'react-native'

import  DateTimePicker  from '@react-native-community/datetimepicker'

const Calender = () => {
    const [datePicker , setDatePicker] = useState(false);

    const [date , setDate] = useState(new Date());

    const [timePicker , setTimePicker] = useState(false);

    const [time , setTime] = useState(new Date(Date.now()));

    function showDatePicker(){
        setDatePicker(true);
    }

    function showTimePicker(){
        setTimePicker(true);
    }

    function onDateSelected(event,value){
        setDate(value);
        setDatePicker(false)
    }
    function onTimeSelected(event,value){
        setTime(value);
        setTimePicker(false)
    }


    

  return (
    <SafeAreaView style={{flex:1}}>
    <View >
        { datePicker && (
            <DateTimePicker
            value={date}
            mode={'date'}
            is24Hour={true}
            onChange={onDateSelected}
           
            />
        )

        }
        { timePicker && (
            <DateTimePicker
            value={time}
            mode={'time'}
            is24Hour={false}
            onChange={onTimeSelected}
            
            />
        )

        }
        { !datePicker && (
            <View style={{margin:30}}>
                <Button title='show Date Picker' color="green" onPress={showDatePicker}/>
                <Text>{date.toDateString()}</Text>
            </View>
        )}

        { !timePicker && (
            <View style={{margin:30}}>
                <Button title='show Time Picker' color="green" onPress={showTimePicker}/>
                <Text>{time.toLocaleTimeString()}</Text>
            </View>
            
        )}

            
        



    </View>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
    Maincontainer: {
        flex:1,
        padding:6,
        alignItems:'center',
        backgroundColor:'white'
    },
    text: {
        fontSize:20,
        color:'red',
        padding:3,
        marginBottom:10,
        textAlign:'center'
    },
});

export default Calender