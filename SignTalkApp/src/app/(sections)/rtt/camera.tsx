import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useEffect } from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useCameraPermission,
  useCameraDevice,
  Camera,
} from "react-native-vision-camera";

const CameraScreen = () => {
  const device = useCameraDevice("front");
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
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

// import React, { useEffect, useState } from "react";
// import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useCameraPermission, useCameraDevice, Camera } from "react-native-vision-camera";
// import { useFrameProcessor } from "react-native-vision-camera";
// import { runOnJS } from "react-native-reanimated";
// import { captureFrame } from "/Users/nithishasathishkumar/SignTalk/SignTalkApp/src/app/(sections)/rtt/utils/captureFrame"; // Ensure this path is correct

// const CameraScreen = () => {
//   const device = useCameraDevice("front");
//   const { hasPermission, requestPermission } = useCameraPermission();
//   const [prediction, setPrediction] = useState<string | null>(null);

//   useEffect(() => {
//     if (!hasPermission) {
//       requestPermission();
//     }
//   }, [hasPermission]);

//   const frameProcessor = useFrameProcessor((frame) => {
//     "worklet";
//     try {
//       runOnJS(processFrame)(frame); // Use runOnJS to call the async function from JS thread
//     } catch (error) {
//       runOnJS(console.error)("Frame Processor Error:", error);
//     }
//   }, []);

//   const processFrame = (frame: any) => {
//     captureFrame(frame).then(async (base64Image) => {
//       try {
//         const response = await fetch("http://your-backend-ip:5001/predict", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ image: base64Image }),
//         });

//         const data = await response.json();
//         setPrediction(data.prediction);
//       } catch (error) {
//         console.error("Error processing frame:", error);
//       }
//     });
//   };

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
//       <Camera
//         style={StyleSheet.absoluteFill}
//         device={device}
//         isActive={true}
//         frameProcessor={frameProcessor}
//       />
//       <View style={styles.predictionBox}>
//         <Text style={styles.predictionText}>
//           {prediction ? `Prediction: ${prediction}` : "Processing..."}
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   centered: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   predictionBox: {
//     position: "absolute",
//     bottom: 50,
//     left: 50,
//     backgroundColor: "rgba(0, 0, 0, 0.6)",
//     padding: 10,
//     borderRadius: 10,
//   },
//   predictionText: {
//     color: "#fff",
//     fontSize: 20,
//   },
// });

// export default CameraScreen;
