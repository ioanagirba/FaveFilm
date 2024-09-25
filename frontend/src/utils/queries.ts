import { gql } from "@apollo/client";
import { Review } from "./types";

export const GET_MOVIES = gql`
  query {
    movieQuery {
      movies {
        id
        title
        description
        imagesUrls
        genres
        director
        cast
      }
    }
  }
`;

export const GET_MOVIES_BY_GENRE = gql`
  query GetMoviesByGenre($genre: String!) {
    movieQuery {
      moviesByGenre(genre: $genre) {
        id
        title
        description
        imagesUrls
        genres
      }
    }
  }
`;

export const GET_MOVIE_BY_ID = (id: number) => gql`
  query {
    movieQuery {
      movie(id : ${id}) {
        id
        title
        description
        imagesUrls
        genres
        director
        cast
      }
    }
  }
`;

export const GET_USERS = gql`
  query {
    userQuery {
      users {
        id
        email
        password
        firstName
        lastName
        watchedList
      }
    }
  }
`;

export const GET_USER_BY_ID = (id: number) => gql`
query{
  userQuery{
    user(id: ${id}){
      id
      email
      firstName
      lastName
      watchedList{
        id
        title
        description
        imagesUrls
      }
    }
  }
}`;

export const CREATE_REVIEW = gql`
  mutation AddReview($review: ReviewInputType) {
    reviewMutation {
      createReview(review: $review)
    }
  }
`;

export const GET_REVIEWS = gql`
  query {
    reviewQuery {
      reviews {
        id
        rating
        comment
        userId
        movieId
        date
      }
    }
  }
`;

export const GET_REVIEW_BY_MOVIE_ID = (movieId: number) => gql`
  query {
    reviewQuery{
      reviewMovie(movieId: ${movieId}){
        id
        rating
        comment
        userId
        user {
          firstName
          lastName
        }
        movieId
        date
      }
    }
  }
`;

export const ADD_MOVIE_TO_WATCHLIST = (userId: number, movieId: number) => gql`
  mutation {
    userMutation {
      addToWatchList(userId: ${userId}, movieId: ${movieId})
    }
  }
`;

export const DELETE_MOVIE_FROM_WATCHLIST = gql`
  mutation DeleteMovie($userId: Int!, $movieId: Int!) {
    userMutation {
      deleteFromWatchList(userId: $userId, movieId: $movieId)
    }
  }
`;

export const LOGGED_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    userMutation {
      loginUser(email: $email, password: $password) {
        id
      }
    }
  }
`;
export const ADD_REVIEW = gql`
  mutation AddReview($review: ReviewInputType) {
    reviewMutation {
      createReview(review: $review)
    }
  }
`;
