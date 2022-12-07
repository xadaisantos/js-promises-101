function getPosts(){
    div.innerHTML = ""
    setTimeout(() => {
        div.innerHTML = "<ol>"
        posts.forEach( (li) => div.innerHTML += `<li>${li.title}</li>` )
        div.innerHTML += "</ol>"
    }, 500)
}

function createPost(title){
    try {
        setTimeout( () => posts.push({ title: title }), 1000 )
    } catch (error) {
        alert(error)
    }
}

function createPostWithPromise(title){
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                posts.push({ title: title })
                resolve()
            }, 1000)
        } catch (error) {
            alert(error)
            reject()
        }
    })
}

async function init(){
    await console.log( createPostWithPromise("Post Three") )
    await createPostWithPromise("Post Four")
    getPosts()
}