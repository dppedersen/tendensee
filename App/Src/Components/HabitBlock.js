import React, { PropTypes } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import RecentDays from './RecentDays.js';
import { Button, Icon, H1, H2, H3, Content, Card, CardItem, } from 'native-base';
const HabitBlock = ({habit, allHabits, onPressPic, onPressNoPic, onPressHabit}) => {
  const habitProps = habit;

  return (
    // <Card style={{}}>
    <View elevation={5} style={styles.habitBlock}>
      <View style={styles.habitName}>
        <Text onPress={() => onPressHabit(habitProps)} style={styles.habitNameTitle}>{habit.name}</Text>
        <Button onPress={() => onPressHabit(habitProps)} style={{paddingLeft: 0, paddingRight: 0, height: 30, }} transparent iconLeft><Icon name='ios-glasses-outline' /></Button>
      </View>
      <RecentDays allHabits={allHabits} dates={habit.dates} habitProps={habitProps} onPressNoPic={onPressNoPic} onPressPic={onPressPic}/>
    </View>
  // </Card>
  )
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  habitBlock: {
    flexDirection: 'column',
    // alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 0,
    marginBottom: 10, //12,
    paddingBottom: 5, //10

    // borderColor: 'white',//'#f0f0f5',
    // borderWidth: 2,
    // borderRadius: 10,
  //   shadowColor: 'black',
  //   shadowOffset: {
  //    width: 0,
  //    height: 3
  //  },
  //  shadowRadius: 5,
  //  shadowOpacity: 0.25

  },

  habitName: {
    flexDirection: 'row',
    justifyContent: 'space-between', // 'center'
    alignItems: 'center',
    // backgroundColor: 'salmon',
    // width: width,
    height: 30,
    marginVertical: 7,
    marginHorizontal: 10,
    // borderWidth: 2,
    borderColor: '#f0f0f5',
    borderBottomWidth: 1,

  },

  habitNameTitle: {
    color: 'black', //'white',
    // fontWeight: 'bold',
    fontSize: 20,
  },
})

export default HabitBlock
