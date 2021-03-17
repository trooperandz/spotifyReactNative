import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type AlbumStackParamList = {
  Albums: undefined;
  AlbumNotes: undefined;
};

export type AlbumStackNavProps<T extends keyof AlbumStackParamList> = {
  navigation: StackNavigationProp<AlbumStackParamList, T>;
  route: RouteProp<AlbumStackParamList, T>;
};
