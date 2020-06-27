import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
  GET_REPOS,
  NO_REPOS,
  GET_AVATAR,
  AVATAR_ERROR,
  UPDATE_AVATAR
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: [],
  avatar: null,
  repos: [],
  loading: true,
  error: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_AVATAR:
      return {
        ...state,
        avatar: payload,
        loading: false
      };
    case AVATAR_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        avatar: null
      };
    case GET_PROFILE:
    case UPDATE_PROFILE:
    case UPDATE_AVATAR:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: []
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false
      };
    case NO_REPOS:
      return {
        ...state,
        repos: []
      };
    default:
      return state;
  }
}
