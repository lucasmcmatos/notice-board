module.exports = {

    posts: [
        {id:"kvnasln",
        title: "Teste do Mural",
        description: "Descrição teste"},
    ],
    
    getAll(){
        return this.posts;
    },

    newPost(title , description){
        this.posts.push({"id":generateId() , title , description})
    },

    deletePost(){
        this.posts.pop()
    }

}

function generateId(){
    return Math.random().toString(36).substring(2,9);
}