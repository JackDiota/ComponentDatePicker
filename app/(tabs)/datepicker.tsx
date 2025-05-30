import { DateTimePicker } from '@expo/ui/jetpack-compose';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TabThreeScreen() {

 
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = (event, newDate) => {
    if (newDate !== undefined) {
      setSelectedDate(newDate);
    }
  };

  return (
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Text>Hello 1</Text>
     <Text>Hello 2</Text>
     <Text>Hello 3</Text>
     <Text>Hello 4</Text>

  {/* <DateTimePicker
    value={new Date()}
    mode="date"
    onChange={(e, date) => console.log(date)}
  /> */}

                    <DateTimePicker 
                  onDateSelected={date => {
                    setSelectedDate(date);
                  }}
                  displayedComponents='hourAndMinute'
                  initialDate={selectedDate.toISOString()}
                  variant='input'
                />

                <DateTimePicker
                  onDateSelected={date => {
                    setSelectedDate(date);
                  }}
                  displayedComponents='hourAndMinute'
                  initialDate={selectedDate.toISOString()}
                  variant='picker'
                />

                                <DateTimePicker
                                  onDateSelected={date => {
                                    setSelectedDate(date);
                                  }}
                                  displayedComponents='hourAndMinute'
                                  initialDate={selectedDate.toISOString()}
                                  variant='input'
                                />

                                                <DateTimePicker
                                                  onDateSelected={date => {
                                                    setSelectedDate(date);
                                                  }}
                                                  displayedComponents='hourAndMinute'
                                                  initialDate={selectedDate.toISOString()}
                                                  variant='picker'
                                                />



      {/* <DateTimePicker
        value={selectedDate}
        mode="date" // o "time" per selezionare l'ora
        onChange={handleDateChange}
      /> */}
      
    </View>
 
    
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
