import React, { Component, propTypes } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native'

import Search from './Search'
import List from './List'

class aqhome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Search />
        <List />
      </View>
    );
  }
}
export default aqhome

const styles = StyleSheet.create({
  container: {
    marginTop: 54,
    // flex: 1
  },
});