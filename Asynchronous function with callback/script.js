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



const createPost = function(post, callback){
    setTimeout(function(){
        posts.push(post)
        callback()
    }, 2000)
}

createPost({title:'post three', publisher: 'fary Kim'}, getPost)