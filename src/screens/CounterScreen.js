import React, {useState} from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';

const CounterScreen = () => {
	const [counter, setCounter] = useState(0);
	console.log(setCounter);

	return( 
		
		<View >
		<Button title="Increase" onPress = { () => {setCounter(counter +1) ; console.log(counter)} }/>
		<Button title="Decrease" onPress = { () => setCounter(counter -1) } />
		<Text>Counter Count: { counter }</Text>
		</View>
	 )
}

const styles =StyleSheet.create({

})

export default CounterScreen