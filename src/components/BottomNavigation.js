import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import Styles from '../styles/Styles';
import Colors from '../values/Colors';

const MENU_ITEMS = [
  {
    icon: 'home',
    title: 'Home',
    destination: 'Home',
  },
  {
    icon: 'map',
    title: 'Explore',
  },
  {
    icon: 'heart',
    title: 'Wishlist',
  },
  {
    icon: 'person-circle',
    title: 'Account',
  },
];

export default function BottomNavigation(props) {
  return (
    <View
      style={[
        Styles.flexRow,
        Styles.alignCenter,
        Styles.flexBetween,
        Styles.ph3,
        Styles.pv1,
        Styles.bd,
      ]}>
      {MENU_ITEMS.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            item.destination
              ? props.navigation.navigate(item.destination)
              : false
          }>
          <View key={index} style={[Styles.alignCenter]}>
            <Icon
              color={props.active == index ? Colors.PRIMARY : Colors.GREY}
              name={item.icon}
              type="ionicon"
            />
            <Text
              style={[
                props.active == index ? Styles.textPrimary : Styles.textGrey,
                Styles.textSm,
              ]}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
