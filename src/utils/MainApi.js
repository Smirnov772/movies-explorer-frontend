const onError = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Сервер не доступен");
  };
  
  class MainApi {
    constructor({ url, headers }) {
      this._url = url;
      // this._cohortId = cohortId;
      this._headers = headers;
    }
    getMeMovies() {
      return fetch(`${this._url}/movies`, {
        method: "GET",
        headers: {...this._headers, "Authorization": `Bearer ${localStorage.getItem("JWT")}`},
        'credentials': 'include',
      }).then(onError);
    }
  
    addMovie(dataMovie) {
      return fetch(`${this._url}/movies`, {
        method: "POST",
        headers: {...this._headers, "Authorization": `Bearer ${localStorage.getItem("JWT")}`},
        'credentials': 'include',
        body: JSON.stringify({
            country: `${dataMovie.country}`,
              director: `${dataMovie.director}`,
              duration: `${dataMovie.duration}`,
              year: `${dataMovie.year}`,
              description: `${dataMovie.description}`,
              image: `${dataMovie.image}`,
              trailer: `${dataMovie.trailer}`,
              thumbnail:`${dataMovie.thumbnail}`,
              movieId: `${dataMovie.movieId}`,
              nameRU: `${dataMovie.nameRU}`,
              nameEN: `${dataMovie.nameEN}`,
        }),
      }).then(onError);
    }
  
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
          method: "GET",
          headers: {...this._headers, "Authorization": `Bearer ${localStorage.getItem("JWT")}`},
          'credentials': 'include',
        }).then(onError);
      }
  
    renameUser(name, email) {
      console.log(name, email);
      
      return fetch(`${this._url}/users/me`, {
        method: "PATCH",
        headers: {...this._headers, "Authorization": `Bearer ${localStorage.getItem("JWT")}`},
        'credentials': 'include',
        body: JSON.stringify({
          name: `${name}`,
          email: `${email}`,
        }),
      }).then(onError);
    }
  
    removeCard(id) {
      console.log(id)
      return fetch(`${this._url}/movies/${id}`, {
        method: "DELETE",
        headers: {...this._headers, "Authorization": `Bearer ${localStorage.getItem("JWT")}`},
        'credentials': 'include',
      }).then(onError);
    }
    // editAvatar(avatarId) {
    //   console.log(avatarId)
    //   return fetch(`${this._url}/users/me/avatar`, {
    //     method: "PATCH",
    //     headers: {...this._headers, "Authorization": `Bearer ${localStorage.getItem("JWT")}`},
    //     'credentials': 'include',
    //     body: JSON.stringify({
    //       avatar: `${avatarId}`,
    //     }),
    //   }).then(onError);
    // }
    // setLike(id) {
    //   console.log(id);
    //   return fetch(`${this._url}/cards/${id}/likes`, {
    //     method: "PUT",
    //     headers: {...this._headers, "Authorization": `Bearer ${localStorage.getItem("JWT")}`},
    //     'credentials': 'include',
    //   }).then(onError);
    // }
    // removeLike(id) {
    //   console.log(id);
    //   return fetch(`${this._url}/cards/${id}/likes`, {
    //     method: "DELETE",
    //     headers: {...this._headers, "Authorization": `Bearer ${localStorage.getItem("JWT")}`},
    //     'credentials': 'include',
    //   }).then(onError);
    // }
    // changeLikeCardStatus(id, isLiked) {
    //   console.log(id, isLiked);
    //   return fetch(`${this._url}/cards/${id}/likes`, {
    //     method: isLiked ? "PUT" : "DELETE",
    //     headers: {...this._headers, "Authorization": `Bearer ${localStorage.getItem("JWT")}`},
    //     'credentials': 'include',
    //   }).then(onError);
    // }
  }
  
  const mainApi = new MainApi({
    url: "https://api.smistav.nomoredomains.icu",
    headers: {
      "Content-Type": "application/json"
    },
  });
  
  export default mainApi;
  