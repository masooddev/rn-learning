import React,{useState} from 'react';
import {StyleSheet,View, Text, Button,FlatList} from 'react-native';

const ColorsScreen = () => {

const [colors,setColors] =useState([]);

	return(
		
		<View style={styles.container}>
		<Button title="Add Color" onPress= {()=>{setColors([...colors, randomRGB()])
		}}  /> 
		
		<FlatList 
		keyExtractor={ (item)=> item }
		data={colors} 
		renderItem= {({item})=> {
			return <View style={{ width:100,height:100,backgroundColor:item }}></View> 
		} } />
		</View>
			
		
	)


}

const randomRGB = () => {
		const red = Math.floor(Math.random()*256);
		const green = Math.floor(Math.random()*256);
		const blue = Math.floor(Math.random()*256);

		return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create({
	container:{
		flexDirection:'column'
	}
})

export default ColorsScreen