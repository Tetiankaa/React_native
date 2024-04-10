import {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {First_Tab_Screens} from './Tabs.tsx';

const FirstTab: FC = () => {
  const {navigate} = useNavigation<any>();

  return (
    <View>
      <Text>First</Text>
      <Button
        title={'Go to  nested screen'}
        onPress={() => {
          navigate(First_Tab_Screens.NESTED_SCREEN);
        }}
      />
    </View>
  );
};

export {FirstTab};
