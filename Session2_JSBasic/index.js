// function first(){
//     console.log("Một");
// }

// function second(){
//     console.log("Hai");
// }

// first()
// second()


// function first2(){
//     setTimeout(function(){
//         console.log(("Mot"),5000);
//     });
// }

// function second2(){
//     console.log(("Hai"));
// }

// first2()
// second2()



//callback2.js
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// function doAsync(url, onSuccess, onError){
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.onload = () => onSuccess(xhr.responseText)
//     xhr.onerror = () => onError(xhr.statusText);
//     xhr.send();
// }

// doAsync("https://api.github.com/users/phuonghaa", value =>{
//     console.log(value);
// }, error => {
//     console.log(error);
// })


//promise.js
// var promise_pending = new Promise((resolve, reject) => {

// })
// console.log("Trạng thái promise ban đầu: ", promise_pending);

// var promise_fullfilled = new Promise((resolve, reject) => {
//     resolve()
// })
// console.log("Fullfilled state ",promise_fullfilled);

// var promise_reject = new Promise((resolve, reject) => {
//     // resolve()
//     reject("Xảy ra lỗi");
// })
// console.log(promise_reject);


//lay du lieu tu promise
// var promise_method2 = new Promise((resolve, reject) => {
//     const jsonData = {
//         "name": "Moomin",
//         'Age': "3",
//         "Title": "Babo"
//     };

//     resolve(jsonData)
// })

// promise_method2
//     .then(function (data) {
//         console.log("Data get when resolve called :", data);
//     })
    

//doAsync => promise
function doAsync(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => {
            return resolve(xhr.responseText)
        }
        xhr.onerror = () => {
            return reject(xhr.statusText)
        }
    })
}

doAsync("https://api.github.com/users/phuonghaa")
    .then(function (data) {
        console.log(data);
    })
    .catch(function(status){
        console.log(status);
    })