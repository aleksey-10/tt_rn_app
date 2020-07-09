import React, { FC } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { PostInterface } from '../../interfaces/PostInterface';
import { PostStyles } from './PostStyles';

type RouteParams = { path: string };

type PostProps = {
  post: PostInterface;
  navigate(screen: string, routeParams: RouteParams): void;
};

export const Post: FC<PostProps> = ({ post, navigate }) => (
  <View style={PostStyles.container}>
    <Text style={PostStyles.title} h4>
      {post.alt_description.replace(/^\w/, match => match.toUpperCase())}
    </Text>
    <TouchableOpacity
      style={PostStyles.imgWrapper}
      onPress={() => navigate('Image', { path: post.urls.regular })}
    >
      <Image
        style={PostStyles.img}
        source={{ uri: post.urls.small }}
      />
    </TouchableOpacity>
    <View style={PostStyles.author}>
      <Text>Author:</Text>
      <Text style={PostStyles.name}>{post.user.name}</Text>
    </View>
  </View>
);
