import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

import Styles from "../styles/Style";

export default function Splash({navigation}){
    return <View>
    {/* content */}
    <ScrollView>
        <View>
            <Image />
            <Text>Lewati</Text>
        </View>
        <Text>New House, New Hope...</Text>
        <Text>get your dream house now, and make some new hopes inside.</Text>
    </ScrollView>
    {/* footer */}
    <View>
        <View>
            { [0,1,2].map((item) => (
                <View/>
            )) }
        </View>
        <View>
            <Text>Get Started</Text>
        </View>
    </View>
    </View>
}