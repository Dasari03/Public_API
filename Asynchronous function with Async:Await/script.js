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

// createPost({title:'post three', publisher: 'fary Kim'}).then(getPost).catch(err => console.log(err))


//async / await
const init = async function(){
 await createPost({title:'post three', publisher: 'fary Kim'})
 getPost()
}

init()

//async / await / fetch

const fetchData = async function(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

fetchData()

//Promise.all([])

const promise1 = 10;
const promise2 = new Promise((resolve, reject)=>{
setTimeout(resolve, 2000, 'resolved in 3 seconds...')
})
const promise3 = Promise.resolve('hello world')
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json())

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values))