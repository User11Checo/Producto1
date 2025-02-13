import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, Platform, StyleSheet } from 'react-native';
import Dashboard from './screens/Dashboard';
import AddExpense from './screens/AddExpense';
import ExpenseHistory from './screens/ExpenseHistory';
import Reports from './screens/Reports';
import Settings from './screens/Settings';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Tab.Navigator 
          screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBar, // Agregamos estilo al tabBar
            tabBarActiveTintColor: '#007AFF', // Color activo
            tabBarInactiveTintColor: '#8E8E93' // Color inactivo
          }}
        >
          <Tab.Screen 
            name="Inicio" 
            component={Dashboard} 
            options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />) }} 
          />
          <Tab.Screen 
            name="Agregar" 
            component={AddExpense} 
            options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="add-circle" color={color} size={size} />) }} 
          />
          <Tab.Screen 
            name="Historial" 
            component={ExpenseHistory} 
            options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="list" color={color} size={size} />) }} 
          />
          <Tab.Screen 
            name="Reportes" 
            component={Reports} 
            options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="bar-chart" color={color} size={size} />) }} 
          />
          <Tab.Screen 
            name="Configuración" 
            component={Settings} 
            options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="settings" color={color} size={size} />) }} 
          />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  paddingHorizontal: 5, // Reduce el padding lateral
  paddingTop: Platform.OS === 'ios' ? 10 : 10, // Ajusta según plataforma
  },
  tabBar: {
    backgroundColor: '#965959', // Fondo blanco en la barra de navegación
    borderTopWidth: 10, 
    borderTopColor: '##965959', // Línea superior sutil
    height: 60, // Altura del tab bar
    paddingBottom: 60, // Espacio en la parte inferior
  },
  
});

