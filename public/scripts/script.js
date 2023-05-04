document.addEventListener('DOMContentLoaded' , ()=>{
    updatePosts();
})

function updatePosts(){

    fetch("http://localhost:5000/all").then(res=>{
        return res.json()
    }).then(json=>{
        console.log(json)

        let postElements = '';

        let posts = JSON.parse(json)

        posts.forEach((post)=>{
            let postElement = `
            <div id=${post.id} class="card mb-4">
                <div class="card-header">
                    <h5 class="card-title">${post.title}</h5>
                </div>
                <div class ="card-body bg-body-secondary">
                    <div class="card-text">
                        ${post.description}
                    </div>
                </div>

                <div class="card-footer">
                    <button onclick="deletePost()" class="rounded bg-danger text-light border-0 ">Delete</button>
                </div>
            </div>`

            postElements += postElement;
        })

        document.getElementById("posts").innerHTML = postElements;

    })

}

function newPost(){

    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    let post = {title , description};

    const options = {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(post)
    }

    fetch("http://localhost:5000/new", options).then(res=>{
        updatePosts();
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        
    })

}

function deletePost(){
    
    let id = window.event.target.parentNode.parentNode.id

    delPost = {id}

    const options = {
        method: "DELETE",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(delPost)
    }

    fetch("http://localhost:5000/delete", options).then(res=>{
        updatePosts();
    })
}