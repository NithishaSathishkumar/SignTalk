import { Frame } from "react-native-vision-camera";
import { encode } from "base64-arraybuffer"; // Use this library to convert to base64

export const captureFrame = async (frame: Frame): Promise<string> => {
    "worklet";
    
    // Convert frame to an array buffer
    const buffer = frame.toArrayBuffer();

    // Encode array buffer to Base64
    const base64Image = encode(buffer);

    return base64Image;
};

