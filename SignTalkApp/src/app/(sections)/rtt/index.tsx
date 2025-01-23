import React from 'react';
import { View, Text } from 'react-native';
import { Stack } from 'expo-router';

const rtt = () => {
    return (
        <View>
            <Stack.Screen options={{title: "Real Time Translation"}} />
            <Text>Real time translation</Text>
            
        </View>
    );
};

export default rtt;