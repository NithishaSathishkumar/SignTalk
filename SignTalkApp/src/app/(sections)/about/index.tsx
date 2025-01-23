import React from 'react';
import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
const about = () => {
    return (
        <View>
            <Stack.Screen options={{title: "About"}} />
            <Text>about</Text>
        </View>
    );
};

export default about;