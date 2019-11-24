import React from 'react';
import {View, Text, StyleSheet, FlatList,Image,Button} from 'react-native';



const ListComponent = () => {
const friends =[
	{name:"Masood",img:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",content:"We tried to keep the Pexels License as simple as possible. Keep reading to find out more."},
	{name:"Noman",img:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",content:"We tried to keep the Pexels License as simple as possible. Keep reading to find out more."},
	{name:"Nadeem",img:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",content:"We tried to keep the Pexels License as simple as possible. Keep reading to find out more."},
	{name:"Farukh",img:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",content:"We tried to keep the Pexels License as simple as possible. Keep reading to find out more."},
	{name:"Bilal",img:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",content:"We tried to keep the Pexels License as simple as possible. Keep reading to find out more."},
	{name:"Saikul",img:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",content:"We tried to keep the Pexels License as simple as possible. Keep reading to find out more."},
	{name:"Mujaddid",img:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",content:"We tried to keep the Pexels License as simple as possible. Keep reading to find out more."},
	{name:"Faheem",img:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",content:"We tried to keep the Pexels License as simple as possible. Keep reading to find out more."},
	{name:"Raed",img:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",content:"We tried to keep the Pexels License as simple as possible. Keep reading to find out more."},
	{name:"Moulana",img:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",content:"We tried to keep the Pexels License as simple as possible. Keep reading to find out more."}

]

return(
<FlatList   keyExtractor={(friends) =>  friends.name } data={friends} renderItem={ ({item}) => {
	return (
		
		<View style={styles.container}>

		<Image source={{ uri: item.img }} style = {{height: 50,width:50,borderRadius:50, margin: 5 }} />
		<View><Text style={styles.headStyle}> {item.name} </Text>
		<Text style={styles.paraStyle}> {item.content} </Text></View>

		</View>
		 // <View> <Button onPress={ () => console.log("Button Pressed") } title="Go to Components List" /> </View>
	)
}} />
)

}


const styles = StyleSheet.create({
	headStyle:{
		fontSize:16,
		marginBottom:5
	},
	paraStyle:{
		fontSize:10,
	},
	img:{
		padding:20
	},
	container:{

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom:15,
       borderBottomColor:'#000',
       padding:10
	}
})

export default ListComponent;


