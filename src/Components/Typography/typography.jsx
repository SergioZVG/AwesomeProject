import React from 'react';
import {View, Text} from 'react-native';
import { Constants } from '../../common';
import {Styles} from './style';

let typeTypography = '';

const Typography = props => {
  const {type, text} = props;
  switch (type) {
    case Constants.component.typography.typeTypography.h1:
      typeTypography = Styles.h1;
      break;
    case Constants.component.typography.typeTypography.h2:
      typeTypography = Styles.h2;
      break;
    case Constants.component.typography.typeTypography.h3:
      typeTypography = Styles.h3;
      break;
    case Constants.component.typography.typeTypography.paragraph:
      typeTypography = Styles.paragraph;
      break;
    case Constants.component.typography.typeTypography.buttonText:
      typeTypography = Styles.buttonText;
      break;
    default:
      break;
  }
  return (
    <View>
      <Text style={[typeTypography]}>{text}</Text>
    </View>
  );
};

export default Typography;
