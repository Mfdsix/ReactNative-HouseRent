import {StyleSheet} from 'react-native';
import Colors from '../values/Colors';

export default StyleSheet.create({
  bannerImage: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
  },
  skipText: {
    top: 15,
    right: 15,
  },
  dotMargin: {
    marginRight: 5,
  },
  dotProgress: {
    width: 10,
    height: 10,
    backgroundColor: Colors.SECONDARY,
  },
  dotActive: {
    backgroundColor: Colors.PRIMARY,
    width: 25,
  },
  bgTransSecondary: {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
});
