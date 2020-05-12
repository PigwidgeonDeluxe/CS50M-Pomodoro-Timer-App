<script src="http://192.168.1.233:8097"></script>
import React from 'react';
import { Text, View, TouchableOpacity, TouchableHighlightBase } from 'react-native';

import styles from './AppStyle';
import FormattedTime from './FormattedTime';
import {vibrate} from './utils'
import SetTimeForm from './SetTimeForm'

export default class App extends React.Component {

clockFunc = () => {};

  state = {
    increment: 1000,
    time: 25*60,
    workTime: 25*60,
    breakTime: 5*60,
    longBreakTime: 30*60,
    breakNumber: 0,
    toggleText: 'Start',
    statusText: 'Paused!',
    showForm: false,
  }

  working = true;
  runTimer = false;
  repeat = false;


  decrementTime = () => {    
    this.clockFunc = setInterval(() => {
      console.log("decreasing time");
      this.setState(prevState => ({time: prevState.time - 1}));
    }, this.state.increment)
  }

  toggleTimer = () => {
    if (!this.runTimer){
      this.setState({toggleText: 'Pause'});
      this.startTimer();
    } else {
      this.setState({toggleText: 'Start'});
      this.pauseTimer();
    }
    this.updateStatus();
  }

  startTimer = () => {
    this.runTimer = true;
    this.decrementTime();
  }

  pauseTimer = () => {
    this.runTimer = false;
    clearInterval(this.clockFunc);
  }

  resetTimer = () => {
    this.setState({time: this.state.workTime, toggleText: 'Start'});
    this.runTimer = false;
    this.working = true;
    clearInterval(this.clockFunc);
    this.updateStatus();
  }

  // runs whenever a the timer counts down to 0
  timerComplete = () => {
    if (this.state.time < 1){
      vibrate();
      this.working = !this.working;
      // clearInterval(this.clockFunc);
      if (this.working){
        this.setState({time: this.state.workTime});
      } else {
        if (this.state.breakNumber < 4){
          this.setState(prevState => ({time: this.state.breakTime, breakNumber: prevState.breakNumber + 1}));
        } else {
          this.setState({time: this.state.longBreakTime, breakNumber: 0});
        }
      }
      this.updateStatus();
    }
  }

  updateStatus = () => {

    if (this.runTimer && this.working){
      this.setState({statusText: 'Working!'});
    } else if (this.runTimer && !this.working){
      this.setState({statusText: 'Break Time!'});
    } else if (!this.runTimer) {
      this.setState({statusText: 'Paused!'});
    }
  }

  showForm = () => { // show set timer form
    this.resetTimer();
    this.setState({showForm: true})
  } 

  setTime = props => {
    this.setState({workTime: props.workTime, breakTime: props.breakTime,longBreakTime: props.longBreakTime});
  }

  componentDidUpdate(prevProps, prevState){
    this.timerComplete();
  }

  componentWillUnmount() {
    clearInterval(this.clockFunc);
  }

  render() {
    if (this.state.showForm) return <SetTimeForm onSubmit={this.setTime} />

    return (
      
      <View style={styles.container}>
        
        <View style={styles.breakContainer}>
          <Text style={styles.breakText}>Break #{this.state.breakNumber}</Text>
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.statusText}> {this.state.statusText}</Text>
        </View>

        <View style={styles.timeContainer}>
          <FormattedTime time={this.state.time}/>
        </View>

        <View style={styles.topRow}>
          <TouchableOpacity style={styles.button} onPress={this.showForm}>
            <Text>Set Timer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.resetTimer}>
            <Text>Reset Time</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomRow}>
          <TouchableOpacity style={styles.button} onPress={this.toggleTimer}>
            <Text>{this.state.toggleText}</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
