import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class App extends React.Component {

  state = {
    increment: 1000,
    setTime: 100,
    time: 100,
    runTimer: false,
    repeat: false,
  }

  interval = setInterval(() => {
    if (this.state.runTimer) {
      console.log("decreasing time");
      this.setState(prevState => ({time: [prevState.time - 1]}));
    }
  }, this.state.increment)

  toggleTimer = () => {
    this.setState(prevState => ({runTimer: !prevState.runTimer}));
  }

  resetTimer = () => {
    this.setState({time: this.state.setTime, runTimer: false});
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Text>{this.state.time}</Text>
        <Button title="Toggle Timer" onPress={this.toggleTimer} />
        <Button title="Reset Timer" onPress={this.resetTimer} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
