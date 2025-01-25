import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useEffect } from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCameraPermission, useCameraDevice, Camera } from "react-native-vision-camera";

const CameraScreen = () => {
    const device = useCameraDevice('front');
    const { hasPermission, requestPermission } = useCameraPermission();
    
    useEffect(() => {
        if (!hasPermission) {
            requestPermission();
        }
    }, [hasPermission]);

    if (!hasPermission) {
        return <ActivityIndicator />;
    }
    if (!device) {
        return<Text>Camera Device not found</Text>
    }

    return(
        <SafeAreaView>
            <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
            <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
        </SafeAreaView> 
    
    );
};

export default CameraScreen;