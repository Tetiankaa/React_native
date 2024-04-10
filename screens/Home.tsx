import {Button, Text, View} from 'react-native';
import {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../routes/Routes.ts';
import {Props} from '../routes/types.ts';

const Home: FC<Props> = () => {
  const {navigate} = useNavigation<any>();
  return (
    <View
      style={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <Text>Home page</Text>
      <Button title={'Go to Users'} onPress={() => navigate(Routes.USERS)} />
      <Button title={'Open Tabs'} onPress={() => navigate(Routes.TABS)} />
    </View>
  );
};

export default Home;
