import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native-elements';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { GalleryStateInterface } from '../../interfaces/GalleryStateInterface';
import { PostInterface } from '../../interfaces/PostInterface';
import { getGalleryFromServer } from '../../redux/actions';
import { GalleryStyles } from './GalleryStyles';
import { Post } from '../Post';

type GalleryProps = {
  isLoading: boolean;
  posts: PostInterface[];
  getGallery(): void;
};

const Gallery: FC<GalleryProps> = ({ posts, isLoading, getGallery }) => {
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
      renderItem={({ item }) => <Post post={item} />}
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
