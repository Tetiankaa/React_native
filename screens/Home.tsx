import {Button, Text, View} from 'react-native';
import {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../routes/Routes.ts';

const Home: FC = () => {
  const {navigate} = useNavigation<any>();
  return (
    <View>
      <Text>Home page</Text>
      <Button title={'Go to Users'} onPress={() => navigate(Routes.USERS)} />
    </View>
  );
};

export default Home;
