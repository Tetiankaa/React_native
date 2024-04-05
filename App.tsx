/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = (): React.JSX.Element => {
  const [users, setUsers] = useState<any[]>();
  const [posts, setPosts] = useState<any[] | null>();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(value => setUsers(value));
  }, []);

  const handleFetchingPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(value => setPosts(value));
  };

  return (
    <SafeAreaView>
      {users && (
        <ScrollView style={styles.container}>
          {users.map(user => (
            <View>
              <Text key={user.id}>
                {user.id}. {user.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      )}
      <View>
        <Button title={'get Posts'} onPress={handleFetchingPosts} />
      </View>
      <View>
        <Button
          title={'Remove'}
          onPress={() => setPosts(null)}
          disabled={!posts}
        />
      </View>
      {posts && (
        <FlatList
          data={posts}
          renderItem={({item}) => (
            <View>
              <Text key={item.id}>
                {item.id}. {item.title}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      )}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    height: 100,
    backgroundColor: 'pink',
  },
  text: {
    color: 'gray',
    fontSize: 26,
    height: 30,
  },
});
export default App;
