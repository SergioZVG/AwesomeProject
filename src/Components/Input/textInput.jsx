import React, {useState} from 'react';
import { View, TouchableOpacity, Image, TextInput } from 'react-native';
import { styles } from '../Input/style.jsx';
import style from '../../common/style.jsx';



const TextInputExample = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }


  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={showPassword}
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholderTextColor={'#3c696e'}
        placeholder="Métele secretos papi"
      />
      <TouchableOpacity onPress={toggleShowPassword}>
        <Image
          style={styles.icon}
          source={
            showPassword
            ? require('../../Images/hide.png')
            : require('../../Images/view.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};


export default TextInputExample;