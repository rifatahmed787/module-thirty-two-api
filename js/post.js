function allPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => postsData(data))
}


function postsData(data) {
    const postContainer = document.getElementById('container');
    for (let user of data) {
        console.log(user);
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h4>User-${user.userId}</h4>
        <h5>Post: ${user.title}</h5>
        <p>Post description: ${user.body}</p>
        `;
        postContainer.appendChild(div);
    }
}
allPosts();