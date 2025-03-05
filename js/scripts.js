document.addEventListener("DOMContentLoaded", function() {
    const profilePic = document.querySelector(".profile-pic");

    profilePic.addEventListener("click", function() {
        profilePic.style.animation = "none";
        setTimeout(() => {
            profilePic.style.animation = "spinEffect 0.5s ease-in-out";
        }, 10);
    });
});