import React from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';

const App = () => {
  let data = {
    '2022-03-10': [
      {
        name: '10.00 AM - 10.45 AM',
        name1: 'Yaswanth Ramisetty',
        name2: 'Software Engineer',
        name3: 'S',
      },
    ],
    '2022-03-11': [],
    '2022-03-12': [
      {
        name: '11.00 AM - 11.30 AM',
        name1: 'Sai Chand',
        name2: 'Devops Engineer',
        name3: 'D',
      },
    ],
    '2022-03-13': [],
    '2022-03-14': [],
    '2022-03-15': [
      {
        name: '11.00 AM - 11.30 AM',
        name1: 'Sandeep Varma',
        name2: 'Business Man',
        name3: 'S',
      },
    ],
    '2022-03-16': [],
    '2022-03-23': [
      {
        name: '10.00 PM - 10.45 PM',
        name1: 'Kiran Kumar',
        name2: 'Relience Manager',
        name3: 'K',
      },
    ],
    '2022-03-24': [],
    '2022-03-25': [
      {
        name: '11.00 AM - 11.30 AM',
        name1: 'Suneel Kumar',
        name2: 'Manager in More',
        name3: 'S',
      },
    ],
    '2022-03-26': [],
    '2022-03-27': [
      {
        name: '11.00 AM - 11.30 AM',
        name1: 'Sai Chand',
        name2: 'Devops Engineer',
        name3: 'D',
      },
    ],
  };

  const renderItems = item => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          height: 100,
          padding: 20,
          marginTop: 10,
        }}>
        <View>
          <Text>{item.name}</Text>
          <Text style={{fontWeight: 'bold', fontSize: 17}}>{item.name1}</Text>
          <Text>{item.name2}</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            height: 50,
            width: 50,
            backgroundColor: '#d4b4b2',
            borderRadius: 25,
            alignItems: 'center',
            marginTop: 5,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.name3}</Text>
        </View>
      </View>
    );
  };


  return (
    <View style={{flex: 1}}>
      <Agenda
      theme={{
        
        agendaDayTextColor: '#0f0c0b',
        agendaDayNumColor: 'green',
        agendaTodayColor: 'red',
        agendaKnobColor: 'blue'
      }}
        items={data}
        selected={new Date()}
        minDate={'2022-02-03'}
        renderItem={renderItems}
        maxDate={'2022-07-30'}
        pastScrollRange={50}
        futureScrollRange={50}
      />
    </View>
  );
};

export default App;
