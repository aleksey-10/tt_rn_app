export interface PostInterface {
  id: string;
  alt_description: string;
  urls: Urls;
  user: UserInterface;
}

export interface UserInterface {
  id: string;
  name: string;
}

type Urls = {
  small: string;
  regular: string;
};
