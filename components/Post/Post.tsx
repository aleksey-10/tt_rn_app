import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native-elements';
import { PostInterface } from '../../interfaces/PostInterface';
import { PostStyles } from './PostStyles';

type PostProps = {
  post: PostInterface;
};

export const Post: FC<PostProps> = ({ post }) => (
  <View style={PostStyles.container}>
    <Text style={PostStyles.title} h4>
      {post.alt_description.replace(/^\w/, match => match.toUpperCase())}
    </Text>
    <Image
      style={PostStyles.img}
      source={{ uri: post.urls.small }}
    />
    <View style={PostStyles.author}>
      <Text>Author:</Text>
      <Text style={PostStyles.name}>{post.user.name}</Text>
    </View>
  </View>
);
