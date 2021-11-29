import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

import BottomNavigation from "../components/BottomNavigation";

import Styles from "../styles/Styles";
import Colors from "../values/Colors";

const MENUS = [
    {
        title: 'House',
        icon: '',
    },
    {
        title: 'Hotel',
        icon: '',
    },
    {
        title: 'Apartment',
        icon: '',
    },
    {
        title: 'Others',
        icon: '',
    },
];

export default function Home({navigation}){
    return <View>
        <ScrollView>
            {/* header */}
            <View>
                <View>
                    <View>
                        <Icon name="" type="ionicon"/>
                        <Text>Mon, 29th Nov</Text>
                    </View>
                    <Text>Hi, Ma Puth</Text>
                </View>
                <Image />
            </View>
            {/* menu */}
            <View>
                {/* location */}
                <View>
                    <View>
                        <Text>Lokasi Anda</Text>
                        <View>
                            <Icon name="" type="ionicon"/>
                            <Text>Bekasi, Indonesia</Text>
                        </View>
                    </View>
                    <Text>Ubah Lokasi</Text>
                </View>
                <View>
                    {/* search */}
                    <View>
                        <Icon name="" type="ionicon"/>
                        <Text>Search property here...</Text>
                    </View>
                    {/* menu */}
                    <View>
                        { MENUS.map((menu, index) => (
                            <View key={ index }>
                                <View>
                                    <Icon name={ menu.icon } type="ionicon"/>
                                </View>
                                <Text>{ menu.title }</Text>
                            </View>
                        )) }
                    </View>
                </View>
            </View>
            {/* nearest properties */}
            <View>
                {/* title */}
                <View>
                    <Text>Nearest Property</Text>
                    <Text>See more</Text>
                </View>
                {/* properties */}
                <ScrollView
                horizontal={true}>
                    { PROPERTIES.map(((property, index) => (
                        <View key={index}>
                            {/* image */}
                            <View>
                                <Image />
                                <View>
                                    <Icon name="" type="ionicon"/>
                                    <Text>{ property.rating }</Text>
                                </View>
                                <View>
                                    <Icon name="" type="ionicon"/>
                                </View>
                            </View>
                            {/* content */}
                            <View>
                                <Text>{ property.category }</Text>
                                <Text>{ property.name }</Text>
                                <View>
                                    <View>
                                        <Icon name="" type="ionicon"/>
                                        <Text>{ property.location }
                                    </View>
                                    <View>
                                        <Icon name="" type="ionicon"/>
                                        <Text>{ property.status }
                                    </View>
                                </View>
                                <View>
                                    <Text>Start from</Text>
                                    <Text>{ property.price }/{property.priceUnit}</Text>
                                </View>
                            </View>
                        </View>
                    ))) }
                </ScrollView>
            </View>
            {/*  */}
        </ScrollView>
        <BottomNavigation active={ 0 }/>
    </View>
}