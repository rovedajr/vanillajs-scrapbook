// para o template do Dirceu no classroom

const { default: Axios } = require("axios");

// 1 - yarn add
// 2 - yarn dev

// AJAX - async JS + XML


// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/users/rovedajr');
// xhr.send(null)

// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//         console.log(JSON.parse(xhr.responseText))
//     }
// }

// PROMISES

// const myPromise = () => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/rovedajr');

//         xhr.send(null)

//         xhr.onreadystatechange = () => {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText))
//                 } else {
//                     reject("Request failed")
//                 }
//             }
//         }
//     })
// }

// myPromise()
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.warn(error)
//     })


// *** AXIOS

// import axios from "axios"

// axios.get('GET', 'https://api.github.com/users/rovedajr')
//     .then((response) => console.log(response))
//     .catch((error) => console.warn(error))


// *** ASYNC AWAIT

async function getGitubUserData() {
    const response = axios.get('GET', 'https://api.github.com/users/rovedajr')
}