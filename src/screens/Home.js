import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import BottomNavigation from '../components/BottomNavigation';

import Styles from '../styles/Styles';
import ScreenStyles from '../styles/Home';
import Colors from '../values/Colors';

import PROPERTIES from '../data/Properties';

const MENUS = [
  {
    title: 'House',
    icon: 'home',
  },
  {
    title: 'Hotel',
    icon: 'bed',
  },
  {
    title: 'Apartment',
    icon: 'podium',
  },
  {
    title: 'Others',
    icon: 'grid',
  },
];

const LIST_NAMES = ['Nearest Property', 'Popular Property'];

export default function Home({navigation}) {
  return (
    <View style={[Styles.bg, Styles.full]}>
      <ScrollView style={Styles.full}>
        {/* header */}
        <View
          style={[
            Styles.flexRow,
            Styles.flexBetween,
            Styles.alignStart,
            Styles.pd2,
          ]}>
          <View>
            <View style={[Styles.flexRow, Styles.alignCenter]}>
              <Icon
                color={Colors.PRIMARY}
                name="sunny-outline"
                type="ionicon"
                size={18}
              />
              <Text style={[Styles.textPrimary, Styles.textSm, Styles.ml1]}>
                Mon, 29th Nov
              </Text>
            </View>
            <Text style={[Styles.textDark, Styles.textLg, Styles.textBold]}>
              Hi, Ma Puth
            </Text>
          </View>
          <View style={Styles.relative}>
            <Icon
              color={Colors.PRIMARY}
              size={39}
              name="person-circle"
              type="ionicon"
            />
            <View style={[Styles.absolute, ScreenStyles.onlineIndicator]} />
          </View>
        </View>
        {/* menu */}
        <View
          style={[
            Styles.mh2,
            Styles.bg,
            Styles.shadow,
            ScreenStyles.bdRadBottom,
          ]}>
          {/* location */}
          <View
            style={[
              Styles.bgPrimary,
              ScreenStyles.bdRadTop,
              Styles.pd2,
              Styles.flexRow,
              Styles.flexBetween,
              Styles.alignCenter,
            ]}>
            <View>
              <Text style={[Styles.textSmoke, Styles.textSm]}>Lokasi Anda</Text>
              <View style={[Styles.flexRow, Styles.mt1]}>
                <Icon
                  color={Colors.WHITE}
                  name="navigate-outline"
                  type="ionicon"
                  size={14}
                />
                <Text style={[Styles.ml1, Styles.textWhite, Styles.textMd]}>
                  Bekasi, Indonesia
                </Text>
              </View>
            </View>
            <Text style={[Styles.textSmoke, Styles.textSm]}>Ubah Lokasi</Text>
          </View>
          <View style={Styles.pd2}>
            {/* search */}
            <View
              style={[
                Styles.bgGrey,
                Styles.pd1,
                Styles.bdRad2,
                Styles.flexRow,
                Styles.alignCenter,
              ]}>
              <Icon
                color={Colors.PRIMARY}
                name="search-outline"
                type="ionicon"
              />
              <Text style={[Styles.textGrey, Styles.ml1]}>
                Search property here...
              </Text>
            </View>
            {/* menu */}
            <View
              style={[
                Styles.flexRow,
                Styles.flexBetween,
                Styles.alignCenter,
                Styles.mt2,
              ]}>
              {MENUS.map((menu, index) => (
                <View key={index} style={[Styles.alignCenter]}>
                  <View
                    style={[
                      Styles.bgPrimary,
                      Styles.pd1,
                      Styles.alignCenter,
                      Styles.flexCenter,
                      ScreenStyles.roundMenu,
                      Styles.mb1,
                    ]}>
                    <Icon
                      color={Colors.WHITE}
                      name={menu.icon}
                      type="ionicon"
                      size={16}
                    />
                  </View>
                  <Text style={[Styles.textGrey]}>{menu.title}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        {/* nearest properties */}
        {LIST_NAMES.map((name, idx) => (
          <View key={idx} style={[Styles.mt2]}>
            {/* title */}
            <View
              style={[
                Styles.flexRow,
                Styles.flexBetween,
                Styles.alignStart,
                Styles.mh2,
              ]}>
              <Text style={[Styles.textDark, Styles.textBold, Styles.textMd]}>
                {name}
              </Text>
              <Text style={[Styles.textGrey, Styles.textSm]}>See more</Text>
            </View>
            {/* properties */}
            <ScrollView horizontal={true} style={Styles.ml1}>
              {PROPERTIES.map((property, index) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('Detail')}>
                  <View
                    key={index}
                    style={[
                      Styles.mg1,
                      Styles.bg,
                      Styles.bdRad2,
                      Styles.shadow,
                      {
                        width: 230,
                      },
                    ]}>
                    {/* image */}
                    <View style={Styles.relative}>
                      <Image
                        style={[
                          ScreenStyles.propertyImage,
                          ScreenStyles.bdRadTop,
                        ]}
                        source={{uri: property.image}}
                      />
                      <View
                        style={[
                          Styles.absolute,
                          ScreenStyles.ratingContainer,
                          Styles.bg,
                          Styles.pd1,
                          Styles.bdRad2,
                          Styles.flexRow,
                          Styles.alignCenter,
                          Styles.shadow,
                        ]}>
                        <Icon
                          size={12}
                          color={Colors.ORANGE}
                          name="star"
                          type="ionicon"
                        />
                        <Text
                          style={[Styles.textDark, Styles.textSm, Styles.ml1]}>
                          {property.rating}
                        </Text>
                      </View>
                      <View
                        style={[
                          Styles.absolute,
                          ScreenStyles.favoriteContainer,
                          Styles.bg,
                          Styles.flexCenter,
                          Styles.shadow,
                        ]}>
                        <Icon
                          color={Colors.PRIMARY}
                          name="heart"
                          type="ionicon"
                        />
                      </View>
                    </View>
                    {/* content */}
                    <View style={Styles.pd1}>
                      <Text
                        style={[
                          Styles.textPrimary,
                          Styles.textBold,
                          Styles.textSm,
                        ]}>
                        {property.category}
                      </Text>
                      <Text
                        style={[
                          Styles.textDark,
                          Styles.textBold,
                          Styles.textMd,
                          Styles.mt1,
                        ]}>
                        {property.name}
                      </Text>
                      <View
                        style={[
                          Styles.mt1,
                          Styles.flexRow,
                          Styles.flexBetween,
                        ]}>
                        <View style={[Styles.flexRow, Styles.alignCenter]}>
                          <Icon
                            size={12}
                            color={Colors.PRIMARY}
                            name="navigate"
                            type="ionicon"
                          />
                          <Text
                            style={[
                              Styles.textGrey,
                              Styles.textSm,
                              Styles.ml05,
                            ]}>
                            {property.location}
                          </Text>
                        </View>
                        <View style={[Styles.flexRow, Styles.alignCenter]}>
                          <Icon
                            size={12}
                            color={Colors.PRIMARY}
                            name="ellipse"
                            type="ionicon"
                          />
                          <Text
                            style={[
                              Styles.textGrey,
                              Styles.textSm,
                              Styles.ml05,
                            ]}>
                            {property.status}
                          </Text>
                        </View>
                      </View>
                      <View style={Styles.mt2}>
                        <Text style={[Styles.textGrey, Styles.textSm]}>
                          Start from
                        </Text>
                        <Text style={[Styles.textDark, Styles.textLg]}>
                          <Text style={Styles.textBold}>${property.price}</Text>{' '}
                          <Text style={Styles.textSm}>
                            /{property.priceUnit}
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
      <BottomNavigation active={0} />
    </View>
  );
}
