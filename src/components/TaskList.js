import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TaskList = ({title,description}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.titleContainer}>
            <View>
              <Text style={styles.titleText}>{title}</Text>
              <Text style={styles.descriptionText}>{description}</Text>
            </View>
            <Text style={{color:"#000"}}>@</Text>

        </View>
    </TouchableOpacity>
  )
}

export default TaskList

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        padding:10,
        marginVertical:15,
    },
    titleContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:10,
        alignItems:"center",
    },
    titleText:{
        color:"#000",
        fontSize:20,
        fontWeight:"bold",
        marginBottom:5
    },
    descriptionText:{
        color:"#000",
        fontSize:14
    },
})