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
            // Save JWT token in local storage
                sessionStorage.setItem("jwt", json.jwt);
                console.log(sessionStorage)
                return json.user
          });
    }
}
