import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { StyleSheet, Text, View,Animated, Pressable } from 'react-native';


function App() {
  const anim =useRef(new Animated.Value(100)).current;
  const fade=()=>{
    Animated.timing(anim,{
      toValue:300,
      duration:2000,
      useNativeDriver:false
    }).start()
  }

  const fadeout=()=>{
    Animated.timing(anim,{
      toValue:100,
      duration:2000,
      useNativeDriver:false
    }).start()
  }

  return (
    <View style={styles.container}>
        <Animated.View style={{width:anim,height:anim,borderRadius:20,backgroundColor:"tomato",justifyContent:"center",alignItems:"center"}}>
          <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>timing</Text>
        </Animated.View>
        <Pressable style={{padding:10,backgroundColor:"yellow",marginTop:20}} onPress={()=>{fade()}}>
        <View><Text>start</Text></View>
        </Pressable>
        <Pressable style={{padding:10,backgroundColor:"yellow",marginTop:20}} onPress={()=>{fadeout()}}>
        <View><Text>stop</Text></View>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;