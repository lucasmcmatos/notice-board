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

    deletePost(id){

        for (i in this.posts){
            if(this.posts[i].id == id){
                console.log(this.posts.splice(i , 1))
            }
        }
        
    }

}

function generateId(){
    return Math.random().toString(36).substring(2,9);
}