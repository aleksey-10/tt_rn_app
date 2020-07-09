import { PostInterface } from '../interfaces/PostInterface';

export const FETCH_GALLERY = 'FETCH_GALLERY';
export const SET_GALLERY = 'SET_GALLERY';
export const SET_LOADING = 'SET_LOADING';

interface FetchGalleryAction {
  type: typeof FETCH_GALLERY;
}

export const getGalleryFromServer = (): FetchGalleryAction => ({ type: FETCH_GALLERY });

interface SetGalleryAction {
  type: typeof SET_GALLERY;
  posts: PostInterface[];
}

export const setGallery = (posts: PostInterface[]): SetGalleryAction => (
  { type: SET_GALLERY, posts }
);

type SetLoadingAction = {
  type: typeof SET_LOADING;
  value: boolean;
};

export const setLoading = (value: boolean): SetLoadingAction => ({ type: SET_LOADING, value });

export type GalleryTypes = SetGalleryAction | SetLoadingAction;
