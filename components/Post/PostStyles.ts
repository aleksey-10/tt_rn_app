import { StyleSheet } from 'react-native';

export const PostStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 42,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  title: {
    paddingLeft: 20,
    marginBottom: 20,
  },
  img: {
    alignSelf: 'stretch',
    maxWidth: 500,
    height: 300,
    borderRadius: 10,
  },
  author: {
    paddingLeft: 20,
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginVertical: 10,
  },
  name: {
    marginLeft: 10,
    marginBottom: 20,
  },
});
