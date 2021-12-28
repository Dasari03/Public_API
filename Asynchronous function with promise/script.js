'use strict'

const postContainer = document.querySelector('.post-container')

const posts = [
    {title:'post #1', publisher: 'Mingyun kim'},
    {title:'post #2', publisher: 'Kevin kim'}
]


const getPost = function(){
    let postToBeDisplayed = ''
    setTimeout(function(){
        posts.forEach(post => {
            postToBeDisplayed += `<li>${post.publisher}</li>`
        })
        postContainer.insertAdjacentHTML("beforeend", postToBeDisplayed)
    }, 1000)
}







const createPost = function(post){
    return new Promise((resolve, reject)=> {
        setTimeout(function(){
            posts.push(post)
            const error = false;
            if(!error){
                resolve();
            }else {
                reject('something went wrong...')
            }
    }, 2000)
    })
}

createPost({title:'post three', publisher: 'fary Kim'}).then(getPost).catch(err => console.log(err))

//Promise.all([])

const promise1 = 10;
const promise2 = new Promise((resolve, reject)=>{
setTimeout(resolve, 2000, 'resolved in 3 seconds...')
})
const promise3 = Promise.resolve('hello world')
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json())

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values))