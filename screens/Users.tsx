import {FC, useEffect, useState} from 'react';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Routes} from '../routes/Routes.ts';
import {useNavigation} from '@react-navigation/native';
import { UserScreenNavigationProp } from "../routes/types.ts";

const Users: FC = () => {
  const {navigate} = useNavigation<UserScreenNavigationProp>();
  const [users, setUsers] = useState<any[]>();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(value => setUsers(value));
  }, []);

  const handleNavigate = (userId: string, username: string) =>
    navigate(Routes.USER_POSTS, {userId, username});

  return (
    <View>
      <Button title={'Go to Home'} onPress={() => navigate(Routes.HOME)} />
      {users && (
        <FlatList
          data={users}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                onPress={() => handleNavigate(item.id, item.username)}>
                <Text>
                  {item.id}. {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default Users;
