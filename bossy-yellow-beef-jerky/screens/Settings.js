import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Switch, Button, Image, TouchableOpacity, Picker } from 'react-native';

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('es');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Configuración</Text>

      {/* 👤 Sección de Perfil */}
      <View style={styles.profileSection}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
        <View>
          <Text style={styles.profileName}>Juan Pérez</Text>
          <Text style={styles.profileEmail}>juanperez@email.com</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar</Text>
        </TouchableOpacity>
      </View>

      {/* ⚙️ Opciones de Configuración */}
      <View style={styles.option}>
        <Text style={styles.optionText}>Modo Oscuro</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>Notificaciones</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>

      {/* 🌍 Selector de Idioma */}
      <View style={styles.option}>
        <Text style={styles.optionText}>Idioma</Text>
        <Picker selectedValue={selectedLanguage} onValueChange={(itemValue) => setSelectedLanguage(itemValue)} style={styles.picker}>
          <Picker.Item label="Español" value="es" />
          <Picker.Item label="Inglés" value="en" />
        </Picker>
      </View>

      {/* 🚪 Botón de Cerrar Sesión */}
      <View style={styles.logoutButton}>
        <Button title="Cerrar Sesión" color="#FF3B30" onPress={() => console.log('Sesión cerrada')} />
      </View>
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
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffd3d3',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 14,
    color: '#555',
  },
  editButton: {
    backgroundColor: '#965959',
    padding: 8,
    borderRadius: 5,
    marginLeft: 'auto',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#965959',
  },
  optionText: {
    fontSize: 18,
    color: '#965959',
  },
  picker: {
    width: 120,
    borderRadius:30,
    backgroundColor: '#ffd3d3'
  },
  logoutButton: {
    marginTop: 30,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#ffd3d3',
  },
});
