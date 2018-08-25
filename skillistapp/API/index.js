const app = {};
import url from '../shared';

app.login = async function(username, password) {
    await fetch(`${url}/login`,{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({'username' : username, 'password': password})
    })
    .then(response => {
        response.json().then(message => {
            if(message.isLogged === true) {
                
            }
        })
    })
}

module.exports = app;