import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

import db from '../config/config';

class SoundButton extends React.Component {
  
  render() {
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: this.props.color }]}
        onPress={() => {
           this.props.navigation.navigate('HomeScreen');
        }}>
        <Text style={styles.buttonText}>Get Attendance</Text>
      </TouchableOpacity>
    );
  }

}