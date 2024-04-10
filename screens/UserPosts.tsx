import {FC, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import { UserPostsScreenRouteProp } from "../routes/types.ts";


const UserPosts: FC = () => {
  const [posts, setPosts] = useState<any>();
  const {
    params: {userId},
  } = useRoute<UserPostsScreenRouteProp>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then(res => res.json())
      .then(value => setPosts(value));
  }, [userId]);

  return (
    <View>
      {posts && (
        <FlatList
          data={posts}
          renderItem={({item}) => (
            <View>
              <Text>
                {item.id}. {item.title}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default UserPosts;
