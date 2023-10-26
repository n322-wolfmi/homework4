import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function ScreenOne({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>This is Screen One.</Text>
            <Button mode="contained" onPress={() => navigation.navigate('Screen Two')}>Change Screens</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        alignItems: 'center'
    },
    text: {
        fontSize:20,
        marginBottom: 15,
    }
})