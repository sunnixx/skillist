import React, {Component} from 'react';
import {Button,Text, Icon, Root} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator, DrawerNavigator} from 'react-navigation';

//Screens
import LoginScreen from './Screens/Login';
import DashboardScreen from './Screens/Dashboard';
import LogoutScreen from './Screens/Logout';
import SearchFilterScreen from './Screens/SearchFilter';
import ResultScreen from './Screens/Result';
import FilterScreen from './Screens/Filter';
import FilterResultScreen from './Screens/FilterResult';

const DrawerStack = DrawerNavigator({
  Dashboard: {screen: DashboardScreen},
  Logout: {screen: LogoutScreen},
  SearchFilter: {screen: SearchFilterScreen},
  Result: {screen: ResultScreen},
  Filter: {screen: FilterScreen},
  FilterResult: {screen: FilterResultScreen}
})

const DrawerNavigation = createStackNavigator({
  DrawerStack: {screen: DrawerStack}
},{
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerLeft: <TouchableOpacity style={{padding: 10}} onPress={() => navigation.toggleDrawer()}><Icon name='menu' style={{color: '#fafafa'}} /></TouchableOpacity>,
    headerStyle: {
      backgroundColor: '#9b59b6'
    }
  })
});

const LoginStack = createStackNavigator({
  Login: {screen:FilterScreen}
});

const PrimaryNav = createStackNavigator({
  LoginStack: {screen: LoginStack},  
  DrawerStack: {screen: DrawerNavigation}
},{
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'LoginStack'
});

export default () => 
  <Root>
    <PrimaryNav />
  </Root>