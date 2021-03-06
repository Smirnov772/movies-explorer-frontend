const onError = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.statusText}`);
};

class ApiAuth {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  register(name,  email, password) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: this._headers,
      'credentials': 'include',
      body: JSON.stringify({
        name: `${name}`,
        email: `${email}`,
        password: `${password}`,
      }),
    }).then(onError);
  }

  authorize(password, email) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: this._headers,
      'credentials': 'include',
      body: JSON.stringify({
        
        password: `${password}`,
        email: `${email}`,
      }),
    }).then(onError);
  }

  JWTValid(jwt) {

    return fetch(`${this._url}/users/me`, {
      method: "GET",
       'credentials': 'include',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${jwt}`
    },
    }).then(onError);
  }
}

const apiAuth = new ApiAuth({
  url: "https://api/smirnov-dev.ru",
  headers: {
    "Content-Type": "application/json"
  },
});

export default apiAuth;
