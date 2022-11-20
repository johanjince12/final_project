import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style={styles.textContainer}>
    
      <Text style={styles.text}>School Attendance</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'grey',
  },
  text:{
    color: 'black',
    padding: 19,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;