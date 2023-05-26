import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import CustomCard from '../../Components/Card/customCard';
import PasswordInput from '../../Components/Input/textInput';
import Carousel from '../../Components/Carousel/carousel';
import Spinner from '../../Components/Spinner/spinner';

const MainPageComponent = props => {
  const {} = props;

  return (
    <View style={styles.position}>

      <View>
        <CustomCard />
      </View>

      {/*<View>
        <Carousel />
      </View>*/}

      {/*<View>
        <PasswordInput />
      </View>*/}

      {/*<View>
        <Spinner />
      </View>*/}

    </View>
  );
};

export default MainPageComponent;
