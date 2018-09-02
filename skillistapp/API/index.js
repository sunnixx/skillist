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

app.searchStudent = async function(student) {
    student = student.toLowerCase();
    
    await fetch(`${shared.url}/searchStudents`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({search:student})
    }).then(response => {
        response.json().then(message => {
            AsyncStorage.setItem('students',JSON.stringify(message.students));
            AsyncStorage.setItem('search','true');
        })
    }).catch(err => {
        if(err) throw new Error(err);
    })
}

module.exports = app;