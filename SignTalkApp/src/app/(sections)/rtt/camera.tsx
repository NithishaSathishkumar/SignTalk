import { View, Text } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const CameraScreen = () => {
    return(
        <SafeAreaView>
            <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
            <Text>Camera Screen</Text>
        </SafeAreaView> 
    
    );
};

export default CameraScreen;