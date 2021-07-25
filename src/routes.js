import React from 'react';
import Home from './pages/home';
import News from './pages/Noticias';
import Institutional from './pages/Institucional'
import Courses from './pages/Cursos';
import Extension from './pages/Extensao';
import calendario from './pages/calendario'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { CardStyleInterpolators } from '@react-navigation/stack';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();



function homeStackScreen() {
    return(
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Noticias" component={News}  />
        <Stack.Screen name="Institucional" component={Institutional} />
        <Stack.Screen name="Extensão" component={Extension} />
        <Stack.Screen name="Calendário" component={calendario} />
      </Stack.Navigator>
    )
}

function coursesStackScreen() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="C" component={Courses} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}
export function Routes(){
    return(
        <Tabs.Navigator
          tabBarOptions={{
            activeBackgroundColor: '#359830',
            inactiveBackgroundColor:'#359830',
            labelPosition: 'below-icon',
            activeTintColor: '#ffffff',
            // inactiveTintColor:'#006400',
            labelStyle: {
              fontSize: 15,
              fontWeight: '600',
            },
            inactiveTintColor: '#B7B7CC',
          }}
        >
            <Tabs.Screen name="Inicial" component={homeStackScreen} 
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }}
            />
            <Tabs.Screen name="Cursos" component={coursesStackScreen}
              options={{
                tabBarLabel: 'Cursos',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="book" color={color} size={size} />
                ),
              }}
            />
        </Tabs.Navigator>
    )
}