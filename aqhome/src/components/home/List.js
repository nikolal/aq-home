import React, { Component, propTypes } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions
} from 'react-native'


const cities = [{
    id: 0,
    name: 'Belgrade',
    backgroundUrl: 'https://images.pexels.com/photos/2324/skyline-buildings-new-york-skyscrapers.jpg?w=940&h=650&auto=compress&cs=tinysrgb',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, temporibus, quidem. Dolores unde error, corporis adipisci mollitia ut asperiores rerum. Laboriosam sapiente provident animi ullam eos, id corporis nisi cumque!'
  },
  {
    id: 1,
    name: 'Novi Sad',
    backgroundUrl: 'https://images.pexels.com/photos/165888/pexels-photo-165888.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, temporibus, quidem. Dolores unde error, corporis adipisci mollitia ut asperiores rerum. Laboriosam sapiente provident animi ullam eos, id corporis nisi cumque!'
  },
  {
    id: 2,
    name: 'Rome',
    backgroundUrl: 'https://images.pexels.com/photos/47426/pexels-photo-47426.jpeg?h=350&auto=compress&cs=tinysrgb',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, temporibus, quidem. Dolores unde error, corporis adipisci mollitia ut asperiores rerum. Laboriosam sapiente provident animi ullam eos, id corporis nisi cumque!'
  },
  {
    id: 3,
    name: 'NYC',
    backgroundUrl: 'https://images.pexels.com/photos/26165/pexels-photo-26165.jpg?w=940&h=650&auto=compress&cs=tinysrgb',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, temporibus, quidem. Dolores unde error, corporis adipisci mollitia ut asperiores rerum. Laboriosam sapiente provident animi ullam eos, id corporis nisi cumque!'
  }
]
const List = () => {

  return (
    <FlatList
      style={styles.container}
      data={cities}
      renderItem={({item}) => (
        <View key={item.id}>
          <Image
            style={styles.image}
            source={{uri: item.backgroundUrl}}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>
              {item.name}
            </Text>
            <Text style={styles.description}>
              {item.description}
            </Text>
          </View>
        </View>
      )}
    />
  )
}

export default List

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    marginTop: 54,
  },
  image: {
    height: 200,
  },
  text: {
    position: 'absolute',
    color: 'white',
    fontSize: 30,
    top: 60,
  },
  textContainer: {
    position: 'absolute',
    padding: 25

  },
  name: {
    paddingBottom: 10,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'grey',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 2
  },
  description: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    textShadowColor: 'grey',
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 0.5
  }
})