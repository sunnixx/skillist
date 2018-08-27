import { AsyncStorage } from 'react-native';

const app = {};
import shared from '../shared';

app.login = async function (email, password) {

    await fetch(`${shared.url}/login`,{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({email,password})
    }).then(response => {
        
        response.json().then(message => {
            if(message.isLogged === true) {
                AsyncStorage.setItem('token',message.token);
            }
        })
    }).catch(err => {
        if(err) throw new Error(err)
    })
}

module.exports = app;