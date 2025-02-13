import React from 'react';
import { Text, FlatList, SafeAreaView, View, StyleSheet } from 'react-native';

export default function ExpenseHistory() {
  const expenses = [
    { id: '1', amount: '$600', category: 'Comida' },
    { id: '2', amount: '$590', category: 'Transporte' },
    { id: '3', amount: '$500', category: 'Entretenimiento' },
    { id: '4', amount: '$948', category: 'Compras' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Historial de Gastos</Text>
      <FlatList 
        data={expenses} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text style={styles.amount}>{item.amount}</Text>
            <Text style={styles.category}>{item.category}</Text>
          </View>
        )} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffa4a4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#965959',
  },
  expenseItem: {
    backgroundColor: '#dfcccc',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#965959',
  },
  category: {
    fontSize: 20,
    color: '#965959',
  },
});
