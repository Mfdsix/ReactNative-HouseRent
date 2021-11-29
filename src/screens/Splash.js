import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';

import Styles from '../styles/Styles';
import ScreenStyles from '../styles/Splash';

import {PROPERTY_IMAGES} from '../values/Images';

export default function Splash({navigation}) {
  return (
    <View style={[Styles.full, Styles.bg]}>
      {/* content */}
      <ScrollView style={Styles.full}>
        <View style={[Styles.relative, Styles.mb2]}>
          <Image
            source={{uri: PROPERTY_IMAGES[0]}}
            style={ScreenStyles.bannerImage}
          />
          <View
            style={[
              Styles.pv1,
              Styles.ph2,
              ScreenStyles.bgTransSecondary,
              Styles.bdRad2,
              Styles.absolute,
              ScreenStyles.skipText,
            ]}>
            <Text style={[Styles.textWhite]}>Lewati</Text>
          </View>
        </View>
        <View style={Styles.pd2}>
          <Text style={[Styles.textDark, Styles.textBold, Styles.textLg]}>
            New House, New Hope.{'\n'}Discover and Book Now.
          </Text>
          <Text style={[Styles.textGrey, Styles.mt2, Styles.textMd]}>
            Get your dream house now, and make some new hopes inside. get your
            dream house now, and make some new hopes inside.
          </Text>
        </View>
      </ScrollView>
      {/* footer */}
      <View
        style={[
          Styles.pd2,
          Styles.flexRow,
          Styles.flexBetween,
          Styles.alignCenter,
        ]}>
        <View style={[Styles.flexRow]}>
          {[0, 1, 2].map(item => (
            <View
              key={item}
              style={[
                Styles.bdRad1,
                ScreenStyles.dotMargin,
                ScreenStyles.dotProgress,
                item == 0 ? ScreenStyles.dotActive : {},
              ]}
            />
          ))}
        </View>
        <View style={[Styles.bgPrimary, Styles.pv1, Styles.ph2, Styles.bdRad2]}>
          <Text style={Styles.textWhite}>Get Started</Text>
        </View>
      </View>
    </View>
  );
}
