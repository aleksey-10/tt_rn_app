import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native-elements';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../interfaces/RootStackParamList';
import { GalleryStateInterface } from '../../interfaces/GalleryStateInterface';
import { PostInterface } from '../../interfaces/PostInterface';
import { getGalleryFromServer } from '../../redux/actions';
import { GalleryStyles } from './GalleryStyles';
import { Post } from '../Post';

type GalleryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Gallery'>;

type GalleryProps = {
  isLoading: boolean;
  posts: PostInterface[];
  getGallery(): void;
  navigation: GalleryScreenNavigationProp;
};

const Gallery: FC<GalleryProps> = ({
  posts,
  isLoading,
  getGallery,
  navigation,
}) => {
  useEffect(() => {
    getGallery();
  }, []);

  if (isLoading) {
    return (
      <View style={GalleryStyles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!posts.length) {
    return (
      <View style={GalleryStyles.container}>
        <Text h3>No users yet.</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={{ paddingTop: 20 }}
      data={posts}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <Post post={item} navigate={navigation.navigate} />
      )}
    />
  );
};

type StateType = {
  gallery: GalleryStateInterface;
};

const mapStateToProps = (state: StateType) => ({
  posts: state.gallery.posts,
  isLoading: state.gallery.isLoading,
});

export const GalleryConnector = connect(
  mapStateToProps,
  { getGallery: getGalleryFromServer },
)(Gallery);
