import React, { Component, propTypes } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native'

const Search = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.searchIcon}
        source={require('./search.jpg')}
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        autoCorerrect={false}
        autoCapitalize="none"
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 15,
  },
  searchIcon: {
    marginRight: 15,
    width: 40,
    height: 40,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'grey',
    fontSize: 20,
    color: 'grey'
  }
})