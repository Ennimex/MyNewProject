import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
      </View>

      {/* Contenido centrado */}
      <View style={styles.centerContent}>
        <Text style={styles.mainText}>
          Entérate de lo que está pasando en el mundo en este momento.
        </Text>
      </View>

      {/* Botones */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.buttonText}>Continuar con Google</Text>
        </TouchableOpacity>

        <Text style={styles.separator}>o</Text>

        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          Al registrarte, aceptas los{' '}
          <Text style={styles.linkText}>Términos</Text>, la{' '}
          <Text style={styles.linkText}>Política de privacidad</Text> y la{' '}
          <Text style={styles.linkText}>Política de cookies</Text>.
        </Text>

        <Text style={styles.loginLink}>
          ¿Ya tienes una cuenta?{' '}
          <Text style={styles.linkText}>Inicia sesión</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  mainText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  googleButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 10,
  },
  createButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
  separator: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 10,
  },
  termsText: {
    color: '#aaa',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
  linkText: {
    color: '#1da1f2',
  },
  loginLink: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 10,
  },
});
