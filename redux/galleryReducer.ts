import { GalleryTypes, SET_GALLERY, SET_LOADING } from './actions';
import { GalleryStateInterface } from '../interfaces/GalleryStateInterface';

const initialState: GalleryStateInterface = {
  isLoading: false,
  posts: [],
};

export const galleryReducer = (state = initialState, action: GalleryTypes) => {
  switch (action.type) {
    case SET_GALLERY:
      return {
        ...state,
        posts: [...action.posts],
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.value,
      };
    default:
      return state;
  }
};
