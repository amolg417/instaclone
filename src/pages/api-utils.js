function getData(){
    return fetch("https://miniinstagram.onrender.com/post").then((data)=>data.json())
}

function SavePost(PostData){
    return fetch("https://miniinstagram.onrender.com/uploadPost",{
        method:"POST",
        
        body:PostData
    }).then((data)=>data.json())
}
export{
    getData,
    SavePost
}