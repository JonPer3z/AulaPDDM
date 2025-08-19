import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Nossa conteúdo sobre a interface</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "bluesky",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});