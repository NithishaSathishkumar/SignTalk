// import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
// import { useEffect } from "react";
// import React from "react";
// import { Stack } from "expo-router";
// import { SafeAreaView } from "react-native-safe-area-context";
// import {
//   useCameraPermission,
//   useCameraDevice,
//   Camera,
// } from "react-native-vision-camera";

// const CameraScreen = () => {
//   const device = useCameraDevice("front");
//   const { hasPermission, requestPermission } = useCameraPermission();

//   useEffect(() => {
//     if (!hasPermission) {
//       requestPermission();
//     }
//   }, [hasPermission]);

//   if (!hasPermission) {
//     return (
//       <SafeAreaView style={styles.centered}>
//         <Text>Requesting camera permissions...</Text>
//         <ActivityIndicator />
//       </SafeAreaView>
//     );
//   }
//   if (!device) {
//     return (
//       <SafeAreaView style={styles.centered}>
//         <Text>Camera Device not found</Text>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
//       <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   centered: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default CameraScreen;

import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useCameraPermission,
  useCameraDevice,
  Camera,
  PhotoFile,
} from "react-native-vision-camera";
import axios, { AxiosError } from "axios";

const CameraScreen: React.FC = () => {
  const device = useCameraDevice("front");
  const { hasPermission, requestPermission } = useCameraPermission();
  const camera = useRef<Camera>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission]);

  const captureImage = async () => {
    if (camera.current) {
      setIsProcessing(true);
      try {
        const photo: PhotoFile = await camera.current.takePhoto();
        const formData = new FormData();
        formData.append("file", {
          uri: `file://${photo.path}`,
          name: "photo.jpg",
          type: "image/jpeg",
        } as unknown as Blob); // Cast to Blob for TypeScript compatibility

        const response = await axios.post<{ prediction: string }>(
          "http://192.168.12.184:5001/predict",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        Alert.alert("Prediction", `Prediction: ${response.data.prediction}`);
      } catch (error) {
        const axiosError = error as AxiosError;
        console.error("Error processing image:", axiosError.message);
        Alert.alert("Error", "Failed to process image. Please try again.");
      } finally {
        setIsProcessing(false);
      }
    }
  };

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />
      <Button title="Capture" onPress={captureImage} disabled={isProcessing} />
      {isProcessing && <ActivityIndicator size="large" color="#0000ff" />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CameraScreen;
