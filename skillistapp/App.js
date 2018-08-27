import React, {Component} from 'react';
import {Button,Text, Icon} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator, DrawerNavigator} from 'react-navigation';

//Screens
import LoginScreen from './Screens/Login';
import DashboardScreen from './Screens/Dashboard';
import LogoutScreen from './Screens/Logout';
import SearchFilterScreen from './Screens/SearchFilter';

const DrawerStack = DrawerNavigator({
  Dashboard: {screen: DashboardScreen},
  Logout: {screen: LogoutScreen},
  SearchFilter: {screen: SearchFilterScreen}
})

const DrawerNavigation = createStackNavigator({
  DrawerStack: {screen: DrawerStack}
},{
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerLeft: <TouchableOpacity style={{borderWidth: 1,borderColor: '#e3e3e3',padding: 10}} onPress={() => navigation.toggleDrawer()}><Icon name='menu' /></TouchableOpacity>
  })
});

const LoginStack = createStackNavigator({
  Login: {screen:LoginScreen}
});

const PrimaryNav = createStackNavigator({
  LoginStack: {screen: LoginStack},  
  DrawerStack: {screen: DrawerNavigation}
},{
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'LoginStack'
});

export default PrimaryNav;