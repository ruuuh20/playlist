import Headers from "./Headers";
import Routes from "./Routes"

export default class Auth {
    static login(code) {

        return fetch(Routes.login, {
            method: "POST",
            headers: Headers(),
            body: JSON.stringify({ code })
        }).then(res => res.json())
          .then(json => {
              console.log(json)
            // Save JWT token in local storage
                sessionStorage.setItem("jwt", json.jwt);
                sessionStorage.setItem("display_name", json.user.display_name);
                console.log(sessionStorage)
                return json.user
          });
    }

    static loggedIn() {
    return !!sessionStorage.jwt
}
}
