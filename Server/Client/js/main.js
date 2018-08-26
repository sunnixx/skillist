//Check for any message
fetch('http://localhost:3000/getmessage')
.then(response => {
    response.json().then(message => {
        if(message.message !== '') {
            $('#message').css('display','block');
            $('#message').append(`<label>${message.message}</label>`);
        }
    })
})