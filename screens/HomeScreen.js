import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config/config';


export default class HomeScreen extends React.Component {
 
  johanApressed() {
    var johan = db.ref('Johan/' + '/');
    johan.update({
      absent: 'true',
    });
  }
 
  johanPpressed() {
    var johan = db.ref('Johan/' + '/');
    johan.update({
      present: 'true',
    });
  }
 
  jimApresed() {
    var jim = db.ref('Jim/' + '/');
    jim.update({
      absent: 'true',
    });
  }
  jimPpresed() {
    var jim = db.ref('Jim/' + '/');
    jim.update({
      present: 'true',
    });
  }
  carlApressed() {
    var carl = db.ref('Carl/' + '/');
    carl.update({
      absent: 'true',
    });
  }
  carlPpressed() {
    var carl = db.ref('Carl/' + '/');
    carl.update({
      present: 'true',
    });
  }
  bobApressed() {
    var bob = db.ref('Bob/' + '/');
    bob.update({
      absent: 'true',
    });
  }
  bobPpressed() {
    var bob = db.ref('Bob/' + '/');
    bob.update({
      present: 'true',
    });
  }
  markApressed() {
    var mark = db.ref('Mark/' + '/');
    mark.update({
      absent: 'true',
    });
  }
  markPpressed() {
    var mark = db.ref('Mark/' + '/');
    mark.update({
      present: 'true',
    });
  }


  goToBuzzerScreen = (buzzercolor) => {
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };
  render() {
    return (
      <View>
        <AppHeader />

        <Text style={styles.studenChartContainer}>Johan</Text>
        <Text style={styles.studenChartContainer}>Carl</Text>
        <Text style={styles.studenChartContainer}>Jim</Text>
        <Text style={styles.studenChartContainer}>Bob</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.johanApressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button }
          onPress={() => {
            this.carlApressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
               this.jimApresed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
             this.bobApressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>
           <TouchableOpacity
          style={styles.button2}
          onPress={() => {
           this.johanPpressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
             this.carlPpressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
              this.johanPpressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
              this.bobPpressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button3}
          onPress={() => {
            this.goToBuzzerScreen('yellow');
          }}>
          <Text style={styles.button3Text}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  studenChartContainer: {
     flexDirection: 'row',
     padding: 10,
     alignItems: 'center',
     margin: 20
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: -95,
    //marginBottom: 30,
    marginLeft: 200,
    width: 100,
    height: 30,
    backgroundColor: 'red'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  button2: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 10,
   // marginTop: 10,
    marginLeft: -30,
    width: 100,
    height: 30,
    backgroundColor: 'green'
  },
  button2Text: {
    textAlign: 'center',
    color: 'white',
  },
  button3: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    //marginBottom: 10,
   marginTop: 90,
    marginLeft: 40,
    width: 200,
    height: 50,
    backgroundColor: 'yellow',
  },
   button3Text: {
    textAlign: 'center',
    color: 'purple',
  },
 
});