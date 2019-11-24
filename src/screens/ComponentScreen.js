import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () => {

	const user= "Masood";
	return (
		<View style={styles.container}>
		<Text style={styles.headStyle}>Getting Started with React Native </Text>
		<Text style={styles.paraStyle}> My Name is {user} </Text>
		</View>
	)
}

const styles = StyleSheet.create({
	headStyle:{
		fontSize:45,
		marginBottom:20
	},
	paraStyle:{
		fontSize:20,
	},
	container:{
		padding:20,
	}
})

export default ComponentScreen;