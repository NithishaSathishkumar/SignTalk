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
        return (
            <SafeAreaView style={styles.centered}>
                <Text>Requesting camera permissions...</Text>
                <ActivityIndicator />
            </SafeAreaView>
        );
    }
    if (!device) {
        return (
            <SafeAreaView style={styles.centered}>
                <Text>Camera Device not found</Text>
            </SafeAreaView>
        );
    }

    return(
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
            <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
        </SafeAreaView> 
    
    );
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CameraScreen;