const Headers = () => (
     {
        "content-type": "application/json",
        'accept': "application/json",
        'Authorization': "Token token=" + sessionStorage.getItem('jwt')
    }
)

export default Headers;
