import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {ChevronRightIcon} from "react-native-heroicons/outline"

const TaskList = ({title,description, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.4} onPress={onPress}>
        <View style={styles.titleContainer}>
            <View>
              <Text style={styles.titleText}>{title}</Text>
              <Text style={styles.descriptionText}>{description}</Text>
            </View>
            <ChevronRightIcon color={"#000"} size={30}/>
        </View>
    </TouchableOpacity>
  )
}

export default TaskList

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        padding:10,
        marginVertical:10,
    },
    titleContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:10,
        alignItems:"center",
        gap:5
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