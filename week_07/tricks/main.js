const backToTopButton = document.querySelector("#backToTop");

const getToTop = () => {
    document.body.scrollTo = 0;
    documentElement.scrollTo = 0;
};

function toTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds smooth scrolling effect
    });
}

// backToTopButton.addEventListener("click", toTop);
backToTopButton.addEventListener("click", getToTop);