import React from "react";
import { View, Image } from "react-native";
import Typography from "../Typography/typography";
import { Constants } from "../../common";
import { styles } from "./style";
import CustomButton from "../CustomButton/customButton";

const CustomCard = props => {
  return (
    <View style={styles.bordercard}>
      <View style={styles.titleCenter}>
        <Typography
          type={Constants.component.typography.typeTypography.h3}
          text={Constants.component.cards.title}
        />
      </View>
      <View style={styles.imagesCenter}>
        <Image style={styles.ImageStyle} source={require('../../Images/phenmor.jpg')}/>
      </View>
      <View style={styles.textCenter}>
        <Typography
          type={Constants.component.typography.typeTypography.paragraph}
          text={Constants.component.cards.description}
        />
      </View>
      <View>
        <CustomButton/>
      </View>
    </View>
  );
};

export default CustomCard;