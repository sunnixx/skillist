var URL = 'http://localhost:3000';

//Check for any message
fetch('http://localhost:3000/getmessage')
    .then(response => {
        response.json().then(message => {
            if (message.message !== '') {
                $('#message').css('display', 'block');
                $('#message').append(`<label>${message.message}</label>`);
            }
        })
    })

$('#certificates').on('click', () => {
    $('#div-certificates').append(`<input type="text" placeholder="Certificates" name="cert01" class="form-control" />`);
});

$('#degree').on('click', () => {
    $('#div-degree').append(`<input type="text" placeholder="Degrees" class="form-control degree" />`);
});

$('#programmes').on('click', () => {
    $('#div-programmes').append(`<input type="text" placeholder="Programmes" name="cert01" class="form-control" />`);
});

$('#projects').on('click', () => {
    $('#div-projects').append(`<input type="text" placeholder="Projects" name="cert01" class="form-control" />`);
});

$('#startups').on('click', () => {
    $('#div-startups').append(`<input type="text" placeholder="startups" name="cert01" class="form-control" />`);
});

$('#studentForm').on('submit', (e) => {
    e.preventDefault();

    let rollNo = $('input[name=rollno]').val();
    let name = $('input[name=name]').val();
    let fatherName = $('input[name=fatherName]').val();
    let cnic = $('input[name=cnic]').val();
    let address = $('input[name=address]').val();
    let section = $('input[name=section]').val();
    let gender = $('select[name=gender]').val();
    let batch = $('input[name=batch]').val();
    let phone = $('input[name=phone]').val();
    let email = $('input[name=email]').val();
    let facebook = $('input[name=facebook]').val();
    let twitter = $('input[name=twitter]').val();
    let linkedin = $('input[name=linkedin').val();
    let instagram = $('input[name=instagram]').val();
    let degrees = $('.degree');
    let certificates = $('.certificates');
    let programmes = $('.programmes');
    let projects = $('.projects');
    let startups = $('.startups');
    let funding = $('select[name=funding]').val();
    let projectCollaboration = $('select[name=projectCollaboration]').val();
    let researcher = $('select[name=researcher]').val();
    let locJournal = $('select[name=locJournal]').val();
    let intJournal = $('select[name=intJournal]').val();
    let sCourse = $('select[name=sCourse]').val();
    let internships = $('select[name=internships]').val();
    let recCertifications = $('select[name=recCertifications]').val();

    //DO THE PHOTO UPLOAD WORK HERE ! 

    let scholarships = $('select[name=scholarships]').val();
    let industrailFunding = $('select[name=industrailFunding]').val();

    let degreeValues = [];
    let certificateValues = [];
    let programmeValues = [];
    let projectValues = [];
    let startupValues = [];

    for(let i = 0; i<degrees.length; i++) {
        degreeValues.push(degrees[i].value);
    }

    for(let i = 0; i<certificates.length; i++) {
        certificateValues.push(certificates[i].value);
    }

    for(let i = 0; i<programmes.length; i++) {
        programmeValues.push(programmes[i].value);
    }

    for(let i = 0; i<projects.length; i++) {
        projectValues.push(projects[i].value);
    }

    for(let i = 0; i<startups.length; i++) {
        startupValues.push(startups[i].value);
    }

    fetch(`${URL}/studentSignup`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            rollNo,
            name,
            fatherName,
            cnic,
            address,
            section,
            gender,
            batch,
            phone,
            email,
            twitter,
            facebook,
            linkedin,
            instagram,
            degreeValues,
            certificateValues,
            programmeValues,
            projectValues,
            startupValues,
            projectCollaboration,
            funding,
            researcher,
            locJournal,
            intJournal,
            sCourse,
            internships,
            recCertifications,
            scholarships,
            industrailFunding
        })
    }).then(response => {
        response.json().then(message => {
            $('#studentMessage').css('display','block');
            $('#studentMessage').append(`<label>${message.msg}</label>`)
        })
    }).catch(err => {if (err) { console.error(err) }});
});