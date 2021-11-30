import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import Styles from '../styles/Styles';
import ScreenStyles from '../styles/Detail';
import Colors from '../values/Colors';

import PROPERTIES from '../data/Properties';

export default function Detail({navigation}) {
  const PROPERTY = PROPERTIES[0];
  const DESCRIPTIONS = ['Description', 'Facilities', 'Transportation', 'Map'];

  return (
    <View style={[Styles.full, Styles.bg]}>
      {/* content */}
      <ScrollView style={Styles.full}>
        <View>
          <View style={Styles.relative}>
            <Image
              style={ScreenStyles.bigImage}
              source={{uri: PROPERTY.image}}
            />
            {/* header */}
            <View
              style={[
                Styles.absolute,
                Styles.flexRow,
                Styles.flexBetween,
                Styles.alignCenter,
                Styles.pd2,
                {
                  top: 0,
                  left: 0,
                  right: 0,
                },
              ]}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Home')}>
                <View style={[ScreenStyles.headerButton, Styles.bg]}>
                  <Icon color={Colors.BLACK} name="arrow-back" type="ionicon" />
                </View>
              </TouchableOpacity>
              <View style={[ScreenStyles.headerButton, Styles.bgPrimary]}>
                <Icon color={Colors.WHITE} name="heart" type="ionicon" />
              </View>
            </View>
          </View>
          <View style={Styles.pd2}>
            {/* category */}
            <View
              style={[Styles.flexRow, Styles.flexBetween, Styles.alignCenter]}>
              <Text style={[Styles.textPrimary, Styles.textBold]}>
                {PROPERTY.category}
              </Text>
              <View style={[Styles.bgPrimary, Styles.bdRad2, Styles.pd1]}>
                <Text style={[Styles.textWhite, Styles.textSm]}>
                  {PROPERTY.status}
                </Text>
              </View>
            </View>
            {/* detail */}
            <View>
              {/* title */}
              <View
                style={[
                  Styles.flexRow,
                  Styles.flexBetween,
                  Styles.alignStart,
                  Styles.mt1,
                ]}>
                <Text
                  style={[
                    Styles.textLg,
                    Styles.textDark,
                    Styles.textBold,
                    Styles.textWrap,
                    Styles.mr2,
                  ]}>
                  {PROPERTY.name}
                </Text>
                <View
                  style={[
                    Styles.flexRow,
                    Styles.alignCenter,
                    Styles.pd1,
                    Styles.bdRad2,
                    Styles.bgGrey,
                  ]}>
                  <Icon
                    size={14}
                    name="star"
                    color={Colors.ORANGE}
                    type="ionicon"
                  />
                  <Text style={[Styles.textGrey, Styles.ml05]}>
                    {PROPERTY.rating}
                  </Text>
                </View>
              </View>
              {/* facilities */}
              <View style={[Styles.mt1]}>
                <View style={[Styles.flexRow, Styles.flexBetween]}>
                  <View
                    style={[Styles.flexRow, Styles.alignCenter, Styles.full]}>
                    <Icon
                      size={15}
                      color={Colors.PRIMARY}
                      name="navigate-outline"
                      type="ionicon"
                    />
                    <Text style={[Styles.ml05, Styles.textGrey]}>
                      {PROPERTY.location}
                    </Text>
                  </View>
                  <View
                    style={[Styles.flexRow, Styles.alignCenter, Styles.full]}>
                    <Icon
                      size={15}
                      color={Colors.PRIMARY}
                      name="file-tray-outline"
                      type="ionicon"
                    />
                    <Text style={[Styles.ml05, Styles.textGrey]}>
                      {PROPERTY.bathroom} Bathroom
                    </Text>
                  </View>
                </View>
                <View style={[Styles.flexRow, Styles.flexBetween, Styles.mt05]}>
                  <View
                    style={[Styles.flexRow, Styles.alignCenter, Styles.full]}>
                    <Icon
                      size={15}
                      color={Colors.PRIMARY}
                      name="resize-outline"
                      type="ionicon"
                    />
                    <Text style={[Styles.ml05, Styles.textGrey]}>
                      {PROPERTY.large}
                    </Text>
                  </View>
                  <View
                    style={[Styles.flexRow, Styles.alignCenter, Styles.full]}>
                    <Icon
                      size={15}
                      color={Colors.PRIMARY}
                      name="bed-outline"
                      type="ionicon"
                    />
                    <Text style={[Styles.ml05, Styles.textGrey]}>
                      {PROPERTY.bedroom} Bedroom
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            {/* price */}
            <View
              style={[
                Styles.mt2,
                Styles.flexRow,
                Styles.flexBetween,
                Styles.alignCenter,
              ]}>
              <View>
                <Text style={[Styles.textGrey]}>Price</Text>
                <Text style={[Styles.textDark, Styles.textBold, Styles.textLg]}>
                  {PROPERTY.price}{' '}
                  <Text
                    style={[Styles.textNormal, Styles.textGrey, Styles.textSm]}>
                    /{PROPERTY.priceUnit}
                  </Text>
                </Text>
              </View>
              <View style={[Styles.flexRow]}>
                <View
                  style={[
                    Styles.pd1,
                    Styles.bdRad2,
                    Styles.shadow,
                    Styles.bgDark,
                    Styles.mr1,
                  ]}>
                  <Text style={Styles.textWhite}>Monthly</Text>
                </View>
                <View
                  style={[Styles.pd1, Styles.bdRad2, Styles.shadow, Styles.bg]}>
                  <Text>Annually</Text>
                </View>
              </View>
            </View>
            {/* description */}
            <View style={Styles.mt2}>
              <ScrollView horizontal={true}>
                {DESCRIPTIONS.map((description, index) => (
                  <View
                    key={index}
                    style={[
                      Styles.pv1,
                      Styles.ph2,
                      index == 0
                        ? {
                            borderBottomColor: Colors.PRIMARY,
                            borderBottomWidth: 2,
                          }
                        : {},
                    ]}>
                    <Text style={[Styles.textDark]}>{description}</Text>
                  </View>
                ))}
              </ScrollView>
              <Text style={[Styles.mt1, Styles.mb2]}>
                {PROPERTY.description}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* footer */}
      <View
        style={[
          Styles.flexRow,
          Styles.flexBetween,
          Styles.alignStart,
          Styles.pd2,
        ]}>
        <View style={[Styles.flexRow]}>
          <Icon
            size={35}
            color={Colors.PRIMARY}
            name="person-circle"
            type="ionicon"
          />
          <View style={Styles.ml1}>
            <Text style={[Styles.textDark, Styles.textBold, Styles.textMd]}>
              {PROPERTY.owner}
            </Text>
            <Text style={[Styles.textGrey]}>owner</Text>
          </View>
        </View>
        <View style={Styles.flexRow}>
          <View style={[ScreenStyles.headerButton, Styles.bgGrey, Styles.mr1]}>
            <Icon name="navigate" color={Colors.PRIMARY} type="ionicon" />
          </View>
          <View style={[ScreenStyles.headerButton, Styles.bgGrey, Styles.mr1]}>
            <Icon name="chatbox-ellipses" color={Colors.GREEN} type="ionicon" />
          </View>
          <View style={[ScreenStyles.headerButton, Styles.bgGrey]}>
            <Icon name="call" color={Colors.ORANGE} type="ionicon" />
          </View>
        </View>
      </View>
    </View>
  );
}
