export function getAllPosts(){
    return fetch('http://localhost:8080/api/v1/getAllPosts')
    .then((res) => res.json())
    .then((posts) => {
        return posts
    })
}

export function getAllUsers(){
    return fetch('http://localhost:8080/api/v1/getAllUsers')
    .then((res) => res.json())
    .then((users) => {
        return users
    })
}

export function addUser(firstName, lastName, email){

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email })
    };

    return fetch('http://localhost:8080/api/v1/addUser', requestOptions)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
}

export function addPost(caption, photoURL, avatarURL, profileURL, deadline){

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ caption: caption, photoURL: photoURL, avatarURL: avatarURL, profileURL: profileURL, deadline: deadline})
    };

    return fetch('http://localhost:8080/api/v1/addPost', requestOptions)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
}

