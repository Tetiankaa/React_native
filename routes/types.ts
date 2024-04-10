import {Routes} from './Routes.ts';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.USERS]: undefined;
  [Routes.USER_POSTS]: {userId: string; username: string};
};

export type UserScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  Routes.USERS
>;

export type UserPostsScreenRouteProp = RouteProp<
  RootStackParamList,
  Routes.USER_POSTS
>;

// import {Routes} from './Routes.ts';
// import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
// import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
//
// export type UsersScreenParams = {[Routes.USERS]: undefined};
// export type UserPostsScreenParams = {
//   [Routes.USER_POSTS]: {userId: string; username: string};
// };
//
// export type UserNavigationProps = CompositeNavigationProp<
//   NativeStackNavigationProp<UsersScreenParams, Routes.USERS>,
//   NativeStackNavigationProp<UserPostsScreenParams, Routes.USER_POSTS>
// >;
//
// export type UserPostsParams<T extends keyof UserPostsScreenParams> = RouteProp<
//   UserPostsScreenParams,
//   T
// >;
