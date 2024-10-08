import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import TaskList from '../../components/TaskList'
import taskList from "../../assets/assets"


const Home = () => {
    const data = taskList
  return (
    <View style={styles.container}>
        <FlatList
        data={data}
        renderItem={({item})=><TaskList
           title= {item.task}
           description={item.description}
        />}
        keyExtractor={item=>item.id.toString()}
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        padding:15
    },
})