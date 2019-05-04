import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
} from 'react-native';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import Todo from './components/Todo';

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
      },
      android: {
        fontSize: 24,
      },
    }),
  },
});

export default class App extends Component {
  state = {
    todos: [{ id: 0, text: 'Fazer café' }, { id: 1, text: 'Estudar o GoNative' }],
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: 'Estudar Javascript' }],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' ? (
          <Text style={styles.text}>Texto</Text>
        ) : (
          <Text style={styles.text}>Android</Text>
        )}
      </View>
    );
  }
}
