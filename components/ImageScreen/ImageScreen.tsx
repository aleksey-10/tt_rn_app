import React, { FC } from 'react';
import { Image, useWindowDimensions, View } from 'react-native';
import { ImageScreenStyles } from './ImageScreenStyles';

type RouteParams = {
  params: { path: string };
};

type ImageScreenProps = {
  route: RouteParams;
};

export const ImageScreen: FC<ImageScreenProps> = ({ route }) => {
  const { width } = useWindowDimensions();
  const { path } = route.params;

  return (
    <View style={ImageScreenStyles.container}>
      <Image style={{ height: width, width }} source={{ uri: path }} />
    </View>
  );
};
