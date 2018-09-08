import { AsyncStorage } from 'react-native';
import { Toast } from 'native-base';

const app = {};
import shared from '../shared';

app.login = async function (email, password) {

    await fetch(`${shared.url}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }).then(response => {

        response.json().then(message => {
            if (message.isLogged === true) {
                AsyncStorage.setItem('token', message.token);
            }
        })
    }).catch(err => {
        if (err) throw new Error(err)
    })
}

app.searchStudent = async function (student) {
    student = student.toLowerCase();

    await fetch(`${shared.url}/searchStudents`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ search: student })
    }).then(response => {
        response.json().then(message => {
            AsyncStorage.setItem('students', JSON.stringify(message.students));
            AsyncStorage.setItem('search', 'true');
        })
    }).catch(err => {
        if (err) throw new Error(err);
    })
}

app.searchByName = async function (name) {
    if (name !== '') {
        name = name.toLowerCase();
        await fetch(`${shared.url}/searchByName`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name })
        }).then(response => {
            response.json().then(message => {
                if (message.students !== false) {
                    AsyncStorage.setItem('students', JSON.stringify(message.students));
                    AsyncStorage.setItem('search', 'true');
                } else {
                    Toast.show({
                        text: 'Record not found',
                        duration: 3000,
                        position: 'center',
                        type: 'danger',
                        buttonText: 'Ok'
                    })
                }
            })
        }).catch(err => {
            if (err) throw new Error(err);
        })
    } else {
        Toast.show({
            text: 'Field cannot be empty',
            duration: 2000,
            position: 'bottom',
            buttonText: 'Ok'
        })
    }
}

app.searchByBatch = async function (batch) {

    if (batch !== '') {
        await fetch(`${shared.url}/searchByBatch`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ batch })
        }).then(response => {
            response.json().then(message => {
                if (message.students !== false) {
                    AsyncStorage.setItem('students', JSON.stringify(message.students));
                    AsyncStorage.setItem('search', 'true');
                } else {
                    Toast.show({
                        text: 'Record not found',
                        duration: 3000,
                        position: 'center',
                        type: 'danger',
                        buttonText: 'Ok'
                    })
                }
            })
        }).catch(err => {
            if (err) throw new Error(err);
        })
    } else {
        Toast.show({
            text: 'Field cannot be empty',
            duration: 2000,
            position: 'bottom',
            buttonText: 'Ok'
        })
    }

}

app.searchByEmail = async function (email) {

    if (email !== '') {
        email = email.toLowerCase();
        await fetch(`${shared.url}/searchByEmail`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: email
        }).then(response => {
            response.json().then(message => {

                if(message.students !== false) {
                    AsyncStorage.setItem('students', JSON.stringify(message.students));
                    AsyncStorage.setItem('search', 'true');
                } else {
                    Toast.show({
                        text: 'Record not found',
                        duration: 3000,
                        position: 'center',
                        type: 'danger',
                        buttonText: 'Ok'
                    })
                }
            })
        }).catch(err => {
            if (err) throw new Error(err);
        })
    } else {
        Toast.show({
            text: 'Field cannot be empty',
            duration: 2000,
            position: 'bottom',
            buttonText: 'Ok'
        })
    }

}

app.searchByCnic = async function (cnic) {

    if (cnic !== '') {
        await fetch(`${shared.url}/searchByCnic`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ cnic })
        }).then(response => {
            response.json().then(message => {
                if(message.students !== false) {
                    AsyncStorage.setItem('students', JSON.stringify(message.students));
                    AsyncStorage.setItem('search', 'true');
                } else {
                    Toast.show({
                        text: 'Record not found',
                        duration: 3000,
                        position: 'center',
                        type: 'danger',
                        buttonText: 'Ok'
                    })
                }
            })
        }).catch(err => {
            if (err) throw new Error(err);
        })
    } else {
        Toast.show({
            text: 'Field cannot be empty',
            duration: 2000,
            position: 'bottom',
            buttonText: 'Ok'
        })
    }
}

app.searchByGpa = async function (gpa) {

    if (gpa !== '') {
        await fetch(`${shared.url}/searchByGpa`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ gpa })
        }).then(response => {
            response.json().then(message => {
                if(message.students !== false) {
                    AsyncStorage.setItem('students', JSON.stringify(message.students));
                    AsyncStorage.setItem('search', 'true');
                } else {
                    Toast.show({
                        text: 'Record not found',
                        duration: 3000,
                        position: 'center',
                        type: 'danger',
                        buttonText: 'Ok'
                    })
                }
            })
        }).catch(err => {
            if (err) throw new Error(err);
        })
    } else {
        Toast.show({
            text: 'Field cannot be empty',
            duration: 2000,
            position: 'bottom',
            buttonText: 'Ok'
        })
    }
}

app.searchByGroup = async function (group) {

    if (group !== '') {
        group = group.toLowerCase();
        await fetch(`${shared.url}/searchByGroup`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ group })
        }).then(response => {
            response.json().then(message => {

                if(message.students !== false) {
                    AsyncStorage.setItem('students', JSON.stringify(message.students));
                    AsyncStorage.setItem('search', 'true');
                } else {
                    Toast.show({
                        text: 'Record not found',
                        duration: 3000,
                        position: 'center',
                        type: 'danger',
                        buttonText: 'Ok'
                    })
                }
            })
        }).catch(err => {
            if (err) throw new Error(err);
        })
    } else {
        Toast.show({
            text: 'Field cannot be empty',
            duration: 2000,
            position: 'bottom',
            buttonText: 'Ok'
        })
    }

}

module.exports = app;