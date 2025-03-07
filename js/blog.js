document.addEventListener("DOMContentLoaded", function () {
    fetch("../blog/blog-posts.json")
        .then(response => response.json())
        .then(posts => {
            const blogContainer = document.getElementById("blog-posts");

            posts.forEach(post => {
                let postElement = document.createElement("div");
                postElement.classList.add("blog-post");

                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p><strong>${post.author}</strong> - ${post.date}</p>
                    <p>${post.summary}</p> 
                    <a href="blog-post.html?id=${post.id}">Read More</a>
                `;

                blogContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error("Error loading blog posts:", error));
});