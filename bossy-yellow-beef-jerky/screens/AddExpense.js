import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AddExpense() {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Comida');
  const [description, setDescription] = useState('');

  const handleSaveExpense = () => {
    if (!amount || isNaN(amount)) {
      Alert.alert('Error', 'Por favor ingresa un monto válido.');
      return;
    }
    Alert.alert('Éxito', 'Gasto guardado correctamente.');
    console.log(`Gasto: ${amount}, Categoría: ${category}, Descripción: ${description}`);
    setAmount('');
    setDescription('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Agregar Gasto</Text>

      {/* Campo de Monto */}
      <TextInput 
        placeholder="Monto" 
        keyboardType="numeric" 
        value={amount} 
        onChangeText={setAmount} 
        style={styles.input} 
      />

      {/* Picker para seleccionar categoría */}
      <Text style={styles.label}>Categoría:</Text>
      <Picker
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Comida" value="Comida" />
        <Picker.Item label="Transporte" value="Transporte" />
        <Picker.Item label="Entretenimiento" value="Entretenimiento" />
        <Picker.Item label="Salud" value="Salud" />
        <Picker.Item label="Educación" value="Educación" />
      </Picker>

      {/* Campo de Descripción */}
      <TextInput 
        placeholder="Descripción (opcional)" 
        value={description} 
        onChangeText={setDescription} 
        style={styles.input} 
      />

      {/* Botones de Guardar y Cancelar */}
      <View style={styles.buttonContainer}>
        <Button title="Guardar" onPress={handleSaveExpense} color="#007AFF" />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Cancelar" onPress={() => console.log('Operación cancelada')} color="#FF3B30" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffa4a4',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#965959',
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#965959',
    fontSize: 18,
    paddingVertical: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#965959',
  },
  picker: {
    backgroundColor: '#ffd3d3',
    marginBottom: 10,
    borderRadius: 30,
    width:120
  },
  buttonContainer: {
    marginVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
