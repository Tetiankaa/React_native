import {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const NestedFirstTab: FC = () => {
  const {goBack} = useNavigation();
  return (
    <View>
      <Text>Nsted</Text>
      <Button title={'Go back'} onPress={() => goBack()} />
    </View>
  );
};

export {NestedFirstTab};
