import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';


export default function ScreenTwo({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>This is Screen Two.</Text>
            <Button mode='outlined' onPress={() => navigation.navigate('Screen One')}>Change Screens</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        alignItems: 'center',
    },
    text: {
        fontSize:20,
        marginBottom: 15,
    }
})