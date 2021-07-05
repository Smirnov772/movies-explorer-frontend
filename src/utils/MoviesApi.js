const onError = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Сервер не доступен");
  };
  
  class MoviesApi {
    constructor({ url, headers }) {
      this._url = url;
      // this._cohortId = cohortId;
      this._headers = headers;
    }
    getMovies() {
      return fetch(`${this._url}/beatfilm-movies`, {
        method: "GET",
        headers: this._headers
      }).then(onError);
    }
}
  const moviesApi = new MoviesApi({
    url: "https://api.nomoreparties.co",
    headers: {
      "Content-Type": "application/json"
    },
  });
  
  export default moviesApi;
  