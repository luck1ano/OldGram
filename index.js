const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainContainerEl = document.getElementById("main-container");
let mainContainerString = "";

function renderPage() {
for ( let i = 0; i < posts.length; i++ ) {
    mainContainerString += `
    <section class="user-info">
    <div class="avatar">
        <img class="avatar-img" src="${posts[i].avatar}" alt="">
    </div>
    <div class="user-details">
        <h1 class="name">${posts[i].name}</h1>
        <p class="location">${posts[i].location}</p>
    </div>
</section> <!-- user-info -->
<section class="post-image">
    <img class="post-img" src="${posts[i].post}" alt="">
</section> <!--post-image-->
<section class="main-body">
    <div class="icons-imgs">
        <img src="/images/icon-heart.png" alt="">
        <img src="/images/icon-comment.png" alt="">
        <img src="/images/icon-dm.png" alt="">
    </div> <!--icons-imgs-->
    <div class="comm-container">
        <p class="likes">${posts[i].likes} likes</p>
        <div class="comments">
        <p class="comment"><span class="username">${posts[i].username}</span> ${posts[i].comment}</p>
    </div> <!--comments-->
    </div> <!--comm-container-->      
</section> <!--main-body--></img>
    `
}
mainContainerEl.innerHTML = mainContainerString;
}



renderPage()