import React from 'react';
import { Text, StyleSheet,Button,View} from 'react-native';


const HomeScreen = (props) => {
  return(
  		
  		<View>
  		 <Text style={styles.text}>HomeScreen</Text>
  		<Button title="Go To Counter Screen" onPress={ 
  			() => {
  			props.navigation.navigate("Counter");
  			 console.log(props)}
  			  } /> 
  			  <Button title="Go To Console" onPress={ () => { console.log(props)}} /> 
	   		  <Button title="Go to Colors"  onPress={ () => { props.navigation.navigate('Colors') } }		  /> 
  		</View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

export default HomeScreen;
