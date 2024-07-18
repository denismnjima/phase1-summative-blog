document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(data => {
            const blogContainer = document.getElementById('blog-container');
            data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                `;
                blogContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
});
