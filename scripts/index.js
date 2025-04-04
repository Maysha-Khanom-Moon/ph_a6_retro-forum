// let's discuss section
const letsDiscussUrl = "https://openapi.programming-hero.com/api/retro-forum/posts";
let Posts = [];

const letsDiscuss = async () => {
    const res = await fetch(letsDiscussUrl);
    const letsDiscussData = await res.json();
    const posts = letsDiscussData.posts;
    // console.log(data);

    Posts = posts;
    letsDiscussDisplay(posts); 
}
letsDiscuss();

// left
const letsDiscussLeftSection = document.getElementById('lets-left-section');

function letsDiscussDisplay(posts) {
    posts.forEach(post => {
        // console.log(post);

        letsDiscussLeftSection.innerHTML += 
        `
        <div class="p-6 lg:p-10 flex flex-col lg:flex-row gap-3 lg:gap-6 rounded-3xl bg-[#797DFC1A]">
            <div class="relative">
                <div class="absolute left-14.5 lg:left-13 top-[-4px] h-4 w-4 rounded-full border-white border-2 ${post.isActive ? 'bg-[#10B981]': 'bg-[#FF3434]'}"></div>
                <img class="w-18 h-18 rounded-2xl" src="${post.image}" alt="">
            </div>
            <div class="flex flex-col w-full">
                <pre class="mb-3 font-inter font-medium text-sm text-[#12132DCC]"># ${post.category}     Author: ${post.author.name}</pre>
                <h1 class="mb-4 let-title">${post.title}</h1>
                <p class="text-extra-light-gray">${post.description}</p>
                <hr class="my-3 lg:my-5 border-dashed border-[#12132D40]">
                            
                <div class="flex justify-between">
                    <div class="flex justify-start gap-6 text-extra-light-gray">
                        <div class="flex items-center gap-3">
                            <i class="fa-regular fa-message"></i>
                            <p>${post.comment_count}</p>
                        </div>
                        <div class="flex items-center gap-3">
                            <i class="fa-regular fa-eye"></i>
                            <p>${post.view_count}</p>
                        </div>
                        <div class="flex items-center gap-3">
                            <i class="fa-regular fa-clock"></i>
                            <p>${post.posted_time} min</p>
                        </div>
                    </div>

                    <button onClick="readMe('${post.id}')" class="btn read-me-btn"><i class="fa-regular fa-envelope-open"></i></button>
                </div>
            </div>
        </div>
        `
    })
}

// right
const letsDiscussRightSection = document.getElementById('lets-right-body');
const readCount = document.getElementById('read-count');

function readMe(id) {
    let post = Posts.find(p => p.id == id);
    if (post) {
        let read_count = parseInt(readCount.innerText);
        read_count++;
        readCount.innerText = read_count;

        letsDiscussRightSection.innerHTML +=
        `
        <div class="flex justify-between gap-4 bg-white p-4 rounded-xl">
            <p>${post.title}</p>
            <div class="flex gap-3 items-center">
                <i class="fa-regular fa-eye"></i>
                <p>${post.view_count}</p>
            </div>
        </div>
        `
    }
}