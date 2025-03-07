document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const blogId = params.get("id");

    if (!blogId) {
        document.getElementById("blog-title").textContent = "Blog post not found.";
        return;
    }

    fetch("../blog/blog-posts.json")
        .then(response => response.json())
        .then(posts => {
            const post = posts.find(p => p.id === blogId);

            if (!post) {
                document.getElementById("blog-title").textContent = "Blog post not found.";
                return;
            }

            document.getElementById("blog-title").textContent = post.title;
            document.getElementById("blog-author").textContent = post.author;
            document.getElementById("blog-date").textContent = post.date;
            
            // Markdown içeriğini HTML'ye çevir
            document.getElementById("blog-content").innerHTML = marked.parse(post.content);
        })
        .catch(error => console.error("Error loading blog post:", error));
});