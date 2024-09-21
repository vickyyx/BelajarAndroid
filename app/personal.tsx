import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

export default function Personal() {
  return (
    <View style={styles.container}>
      {/* Bagian kiri dengan gambar dan background */}
      <View style={styles.leftContainer}>
        <ImageBackground
          source={require('../assets/images/pp.jpg')} // Path relatif ke gambar lokal
          style={styles.image}
        />
      </View>

      {/* Bagian kanan dengan teks */}
      <View style={styles.rightContainer}>
        <Text style={styles.name}>Vicky Firmansyah</Text>
        <Text style={styles.title}>IT Support Intern</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>firmansyahvicky001@gmai.com</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>13 Juni 2001</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Bogor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Looking for UI/UX and IT Support Jobs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Now Intern at PT. Bukaka Teknik Utama Tbk</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  leftContainer: {
    flex: 1,
    backgroundColor: "#FF5A3C",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300, // Perbesar ukuran gambar
    height: 400, // Perbesar ukuran gambar
    resizeMode: "contain",
  },
  rightContainer: {
    flex: 1,
    backgroundColor: "#0D3B4C",
    justifyContent: "center",
    padding: 20,
  },
  name: {
    color: "#FFF",
    fontSize: 32, // Ukuran teks sedikit diperbesar
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center", // Rata tengah
  },
  title: {
    color: "#FFF",
    fontSize: 18, // Ukuran teks sedikit diperbesar
    marginBottom: 40,
    textAlign: "center", // Rata tengah
  },
  button: {
    borderBottomColor: "#FF5A3C",
    borderBottomWidth: 1,
    marginBottom: 20,
    alignItems: "center", // Membuat teks rata tengah
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center", // Rata tengah
  },
});
