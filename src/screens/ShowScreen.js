import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { Entypo } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext)
  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id')
  )

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
        <Entypo name='pencil' style={styles.pencil} />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({
  pencil: {
    fontSize: 24,
    marginRight: 15,
  },
})

export default ShowScreen
