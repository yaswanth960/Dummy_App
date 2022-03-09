import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Agenda, Calendar} from 'react-native-calendars';
import {meeting} from './data/meetings';
import Toutch_id from './components/Toutch_id';


const App = () => {
  const [selectedvalue, setSelectedValue] = useState('j');
  const [datas, setDatas] = useState({});

  React.useEffect(() => {
    let trans_date = {};
    meeting.forEach(meet => {
      let d = meet.date;
      if (trans_date[d]) {
        trans_date[d].push(meet);
      } else {
        trans_date[d] = [meet];
      }
    });
    setDatas(trans_date);
    
  }, []);

  const setStatus = (date, firstItemInDay, sta) => {
    let obj = {
      ...datas,
      [date]: datas[date].map((item, index) =>
        index == 0 ? {...item, status: sta} : item,
      ),
    };
    setDatas(obj);
  };

  const renderItems = (item, firstItemInDay, day) => {
    let a = item.name1.split(' ');
    let a1 = a[0][0];
    let a2 = a[1][0] != undefined ? a[1][0] : '';

    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor:
            item.status == 'Default'
              ? 'white'
              : item.status == 'Sucess'
              ? '#b6d4be'
              : item.status == 'Pending'
              ? '#e0908d'
              : '#d6c685',
          height: 100,
          borderRadius: 10,
          padding: 20,
          marginRight: 13,
          marginTop: 10,
        }}>
        <View>
          <Text>{item.name}</Text>
          <Text style={{fontWeight: 'bold', fontSize: 17}}>{item.name1}</Text>
          <View>
            <Picker
              selectedValue={item.status}
              onValueChange={select =>
                setStatus(item.date, firstItemInDay, select)
              }
              style={{height: 20, width: 150, marginBottom: 20}}>
              <Picker.Item label="Default" value="Default" />
              <Picker.Item label="Sucess" value="Sucess" />
              <Picker.Item label="Pending" value="Pending" />
              <Picker.Item label="Hold" value="Hold" />
            </Picker>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            height: 50,
            width: 50,
            backgroundColor:
              a1 <= 'E'
                ? '#d4b4b2'
                : a1 <= 'K'
                ? '#4cd470'
                : a1 <= 'M'
                ? '#c98fcf'
                : '#cce3e0',
            borderRadius: 25,
            alignItems: 'center',
            marginTop: 5,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>{a1 + a2}</Text>
        </View>
      </View>
    );
  };

  const renderEmptyDataa = () => {
    return (
      <View
        style={{justifyContent: 'center', alignItems: 'center', height: 100}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>
          No Event Available
        </Text>
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
          agendaKnobColor: 'blue',
        }}
        items={datas}
        selected={new Date()}
        minDate={'2022-02-03'}
        renderEmptyData={renderEmptyDataa}
        renderItem={renderItems}
        maxDate={'2022-07-30'}
        pastScrollRange={50}
      />
      <Toutch_id />
    </View>
  );
};

export default App;
