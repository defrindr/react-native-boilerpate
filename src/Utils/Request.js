import {API, STORAGE} from '@config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import qs from 'qs';

export const REQUEST_METHOD = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
  OPTION: 'option',
};

const Request = async (url, options, useAuth = false) => {
  const {method = REQUEST_METHOD.GET, data, params, headers} = options;

  options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (useAuth) {
    // get token from persistent storage
    let haveAuth = await AsyncStorage.getItem(STORAGE.AUTH);
    const {token} = JSON.parse(haveAuth);

    options.headers.Authorization = `Bearer ${token}`;
  }

  if (data) {
    options.body = JSON.stringify(data);
  }

  if (params) {
    url = `${url}?${qs.stringify(params)}`;
  }

  let response = await fetch(url, options);

  let responseJson = await response.json();
  console.log('RESPONSE JSON: ', responseJson);

  if (response.status === 401) {
    return await HandleUnauthorized(url, options, responseJson);
  } else if (response.status === 500) {
    console.error('SERVER 500 ERROR', responseJson);
  }

  return responseJson;
};

const HandleUnauthorized = async (url, options, response) => {
  // get refresh token from persistent storage
  let auth = await AsyncStorage.getItem(STORAGE.AUTH);
  const {refresh_token} = JSON.parse(auth);

  if (refresh_token) {
    // get new token
    let new_token = await RefreshToken(refresh_token);

    // set new token
    await AsyncStorage.setItem(STORAGE.TOKEN, new_token.token);

    // try Request again
    return await Request(url, options);
  } else {
    // logout
    await AsyncStorage.removeItem(STORAGE.AUTH);

    return response;
  }
};

const RefreshToken = async refresh_token => {
  const response = await Request(API.LOGIN, {
    method: REQUEST_METHOD.POST,
    data: {
      grant_type: 'refresh_token',
      refresh_token,
    },
  });

  return response;
};

const FPost = async (url, data) => {
  return await Request(url, {
    method: REQUEST_METHOD.POST,
    data,
  });
};

const FGet = async (url, params) => {
  return await Request(url, {
    method: REQUEST_METHOD.GET,
    params,
  });
};

const FPut = async (url, data) => {
  return await Request(url, {
    method: REQUEST_METHOD.PUT,
    data,
  });
};

const FDelete = async (url, data) => {
  return await Request(url, {
    method: REQUEST_METHOD.DELETE,
    data,
  });
};

const FGetWA = async (url, params) => {
  return await Request(
    url,
    {
      method: REQUEST_METHOD.GET,
      params,
    },
    true,
  );
};

const FPostWA = async (url, data) => {
  return await Request(
    url,
    {
      method: REQUEST_METHOD.POST,
      data,
    },
    true,
  );
};

const FPutWA = async (url, data) => {
  return await Request(
    url,
    {
      method: REQUEST_METHOD.PUT,
      data,
    },
    true,
  );
};

const FDeleteWA = async (url, data) => {
  return await Request(
    url,
    {
      method: REQUEST_METHOD.DELETE,
      data,
    },
    true,
  );
};

export default {
  FPost,
  FGet,
  FPut,
  FDelete,
  FGetWA,
  FPostWA,
  FPutWA,
  FDeleteWA,
};
