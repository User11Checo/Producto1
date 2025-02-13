import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';

export default function Dashboard() {
  const [balance, setBalance] = useState(1000); // Saldo dinámico
  const expenses = [
    { id: '1', amount: '$600', category: 'Comida' },
    { id: '2', amount: '$590', category: 'Transporte' },
    { id: '3', amount: '$500', category: 'Entretenimiento' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Saldo Disponible */}
      <Text style={styles.balanceText}>Saldo Disponible: ${balance}</Text>

      {/* Sección de Ingresos/Gastos */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryTitle}>Ingresos</Text>
          <Text style={styles.income}>$2000</Text>
        </View>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryTitle}>Gastos</Text>
          <Text style={styles.expense}>$1000</Text>
        </View>
      </View>

      {/* Últimos Gastos */}
      <Text style={styles.sectionTitle}>Últimos Gastos</Text>
      <FlatList 
        data={expenses} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text style={styles.expenseText}>{item.category}</Text>
            <Text style={styles.expenseAmount}>{item.amount}</Text>
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
  balanceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#965959',
    textAlign: 'center',
    marginBottom: 20,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  summaryBox: {
    flex: 1,
    padding: 15,
    backgroundColor: '#ffd3d3',
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#965959',
  },
  income: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  expense: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#965959',
    marginBottom: 10,
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#965959',
  },
  expenseText: {
    fontSize: 18,
    color: '#965959',
  },
  expenseAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  
});

