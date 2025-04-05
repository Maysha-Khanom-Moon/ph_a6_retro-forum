// let's discuss section
const letsDiscussUrl = "https://openapi.programming-hero.com/api/retro-forum/posts";

const letsDiscuss = async () => {
    const res = await fetch(letsDiscussUrl);
    const letsDiscussData = await res.json();
    const data = letsDiscussData.posts;
    console.log(data);
    
}
letsDiscuss();