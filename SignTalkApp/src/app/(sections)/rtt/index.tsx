import React from 'react';
import { View, Text, Button } from 'react-native';
import { Link, Stack } from 'expo-router';
import MarkdownDisplay from '../../../components/core/MarkdownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = 'Uses Real Time Camera to Translation, American Sign Language Alphabet ';
const RTT = () => {
    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
            <Stack.Screen options={{ title: 'Real Time Translation Page' }}></Stack.Screen>
            <MarkdownDisplay>{description}</MarkdownDisplay>
            {/* <Link href={"rtt/camera"} asChild>
                {/* <Button title="Go to Real Time Camera"></Button> }
            </Link> */}
        </SafeAreaView>
    );
};

export default RTT;