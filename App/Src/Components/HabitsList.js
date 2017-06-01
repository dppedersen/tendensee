import React, { PropTypes } from 'react'
import { ScrollView, View, Text } from 'react-native';
import HabitBlock from './HabitBlock.js'
import ModalRoot from './ModalRoot.js'

const HabitsList = ({habits, test, onPressHabit}) => (
  <ScrollView>
    {habits ? habits.map(habit => {
      return <HabitBlock key={habit.id} habit={habit} onPressHabit={onPressHabit} onPressItem={test}/>
    }):<Text>''</Text>}
    <ModalRoot />
  </ScrollView>
)

export default HabitsList
