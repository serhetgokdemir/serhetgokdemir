document.addEventListener("DOMContentLoaded", function() {
    const profilePic = document.querySelector(".profile-pic");

    profilePic.addEventListener("click", function() {
        profilePic.style.animation = "none"; // Önce animasyonu sıfırla
        setTimeout(() => {
            profilePic.style.animation = "spinEffect 0.5s ease-in-out"; // 3D dönüş animasyonunu çalıştır
        }, 10);
    });
});