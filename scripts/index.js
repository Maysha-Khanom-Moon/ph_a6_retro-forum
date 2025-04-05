// let's discuss section
const letsDiscussUrl = "https://openapi.programming-hero.com/api/retro-forum/posts";

const letsDiscuss = async () => {
    const res = await fetch(letsDiscussUrl);
    const letsDiscussData = await res.json();
    const posts = letsDiscussData.posts;
    // console.log(data);
    letsDiscussDisplay(posts); 
}
letsDiscuss();

// left
const letsDiscussLeftSection = document.getElementById('lets-left-section');

function letsDiscussDisplay(posts) {
    posts.forEach(post => {
        console.log(post);
    })
}