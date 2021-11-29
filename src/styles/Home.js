import {StyleSheet} from 'react-native';
import Colors from '../values/Colors';

export default StyleSheet.create({
  onlineIndicator: {
    width: 15,
    height: 15,
    borderRadius: 20,
    backgroundColor: Colors.GREEN,
    bottom: 0,
    left: 0,
  },
  bdRadTop: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bdRadBottom: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  roundMenu: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  propertyImage: {
    width: 230,
    height: 150,
    resizeMode: 'cover',
  },
  ratingContainer: {
    left: 10,
    top: 10,
  },
  favoriteContainer: {
    bottom: -20,
    right: 10,
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});
