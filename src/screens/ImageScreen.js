import React from 'react';
import {StyleSheet, View,Text, Button } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = (props) => {
	
	return(
		<View>

			<ImageDetail title="Forest" imageSource={require('../../assets/beach.jpg')} />
		<ImageDetail title="Nature" imageSource={require('../../assets/forest.jpg')} />
		<ImageDetail title="Sea" imageSource={require('../../assets/mountain.jpg')} />

		</View>
// console.log(props)
	)
}


const styles =StyleSheet.create({

});


export default ImageScreen;