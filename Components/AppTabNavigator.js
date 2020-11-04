import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AddTask from '../screens/AddTask';
import ViewTaskList from '../screens/ViewTaskList';

export const AppTabNavigator = createBottomTabNavigator({
ViewTaskList:{
    screen: ViewTaskList,
},
AddTask:{
    screen: AddTask,
}
})