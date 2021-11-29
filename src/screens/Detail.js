import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';

import Styles from '../styles/Styles';

export default function Detail({navigation}) {
  const PROPERTY = PROPERTIES[0];
  const DESCRIPTIONS = ['Description', 'Facilities', 'Transportation', 'Map'];

  return (
    <View>
      {/* header */}
      <View>
        <View>
          <Icon name="" type="ionicon" />
        </View>
        <View>
          <Icon name="" type="ionicon" />
        </View>
      </View>
      {/* content */}
      <ScrollView>
        <View>
          <Image />
          {/* category */}
          <View>
            <Text>{PROPERTY.category}</Text>
            <Text>{PROPERTY.status}</Text>
          </View>
          {/* detail */}
          <View>
            {/* title */}
            <View>
              <Text>{PROPERTY.name}</Text>
              <View>
                <Icon name="" type="ionicon" />
                <Text>{PROPERTY.rating}</Text>
              </View>
            </View>
            {/* facilities */}
            <View>
              <View>
                <View>
                  <Icon name="" type="ionicon" />
                  <Text>{PROPERTY.location}</Text>
                </View>
                <View>
                  <Icon name="" type="ionicon" />
                  <Text>{PROPERTY.bathroom} Bathroom</Text>
                </View>
              </View>
              <View>
                <View>
                  <Icon name="" type="ionicon" />
                  <Text>{PROPERTY.large}</Text>
                </View>
                <View>
                  <Icon name="" type="ionicon" />
                  <Text>{PROPERTY.bedroom} Bedroom</Text>
                </View>
              </View>
            </View>
          </View>
          {/* price */}
          <View>
            <View>
              <Text>Price</Text>
              <Text>{PROPERTY.price}</Text>
            </View>
            <View>
              <View>
                <Text>Monthly</Text>
              </View>
              <View>
                <Text>Annually</Text>
              </View>
            </View>
          </View>
          {/* description */}
          <View>
            <ScrollView horizontal={true}>
              {DESCRIPTIONS.map((description, index) => (
                <View key={index}>
                  <Text>{description}</Text>
                </View>
              ))}
            </ScrollView>
            <Text>{PROPERTY.description}</Text>
          </View>
        </View>
      </ScrollView>
      {/* footer */}
      <View>
        <View>
          <Image />
          <View>
            <Text>{PROPERTY.owner}</Text>
            <Text>owner</Text>
          </View>
        </View>
        <View>
          <View>
            <Icon name="" type="ionicon" />
          </View>
          <View>
            <Icon name="" type="ionicon" />
          </View>
          <View>
            <Icon name="" type="ionicon" />
          </View>
        </View>
      </View>
    </View>
  );
}
