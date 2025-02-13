import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ExpenseHistory from '../screens/ExpenseHistory';
import AddExpense from '../screens/AddExpense';
import { Ionicons } from '@expo/vector-icons';
import { PaperProvider } from 'react-native-paper';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: { backgroundColor: '#6200ea', paddingBottom: 5 },
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#ccc',
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Historial') {
                iconName = 'list';
              } else if (route.name === 'Agregar') {
                iconName = 'add-circle';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Historial" component={ExpenseHistory} />
          <Tab.Screen name="Agregar" component={AddExpense} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
