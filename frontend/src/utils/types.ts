export interface Movie {
  id: number;
  title: string;
  description: string;
  imagesUrls: string[];
  genres?: string[];
  cast?: string[];
  director?: string;
}

export interface Review {
  id?: number;
  rating: number;
  comment: string;
  userId: number;
  user?: User;
  movieId: number;
  date?: string;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  watchedList: Movie[];
}
