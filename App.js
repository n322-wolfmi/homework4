import { StyleSheet, Text, View } from 'react-native';
import ScreenOne from "./components/ScreenOne";
import ScreenTwo from "./components/ScreenTwo";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Screen One" component={ScreenOne}/>
          <Stack.Screen name="Screen Two" component={ScreenTwo}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
