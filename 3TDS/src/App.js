import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import StructureLayout from "../screens/StructureLayout";
import TypesLayout from "../screens/TypesLayout";
import ManagerLayout from "../screens/ManagerLayout";
import DisplayComponents from "../screens/DisplayComponents";
import Modal from "../screens/Modal";
import Navebar from "../screens/Navebar";
import ControlElements from "../screens/ControlElements";
import Execitions from "../screens/Execitions";
import Manipulacao from "../screens/Manipulacao";
import InputOutput from "../screens/InputOutput";
import TratamentoGestual from "../screens/TratamentoGestual"; 


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
        <Drawer.Screen name="Struture" component={StructureLayout}></Drawer.Screen>
        <Drawer.Screen name="Types" component={TypesLayout}></Drawer.Screen>
        <Drawer.Screen name="Manager" component={ManagerLayout}></Drawer.Screen>
        <Drawer.Screen name="Display" component={DisplayComponents}></Drawer.Screen>
        <Drawer.Screen name="Modal" component={Modal}></Drawer.Screen>
        <Drawer.Screen name="Navebar" component={Navebar}></Drawer.Screen>
        <Drawer.Screen name="Controle" component={ControlElements}></Drawer.Screen>
        <Drawer.Screen name="Exeção" component={Execitions}></Drawer.Screen>
        <Drawer.Screen name="Manipulação" component={Manipulacao}></Drawer.Screen>
        <Drawer.Screen name="Entrada e Saída" component={InputOutput}></Drawer.Screen>
        <Drawer.Screen name="Tratamento Gestual" component={TratamentoGestual}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
