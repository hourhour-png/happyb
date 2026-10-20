// ================= SEARCH MOVIE =================

const searchInput = document.getElementById("searchInput");

const movies = document.querySelectorAll(".movie-item");

const noResult = document.getElementById("noResult");


searchInput.addEventListener("input", function () {

    const searchValue =
        searchInput.value.toLowerCase().trim();

    let found = 0;

    movies.forEach(function (movie) {

        const title =
            movie.getAttribute("data-title").toLowerCase();

        if (title.includes(searchValue)) {

            movie.style.display = "block";

            found++;

        } else {

            movie.style.display = "none";

        }

    });


    // Show no result

    if (found === 0) {

        noResult.style.display = "block";

    } else {

        noResult.style.display = "none";

    }

});



// ================= CATEGORY FILTER =================

const categoryButtons =
    document.querySelectorAll(".category-btn");


categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active

        categoryButtons.forEach(function (btn) {

            btn.classList.remove("active");
            btn.classList.remove("btn-danger");
            btn.classList.add("btn-outline-light");

        });


        // Add active

        button.classList.add("active");
        button.classList.remove("btn-outline-light");
        button.classList.add("btn-danger");


        const category =
            button.getAttribute("data-category");

        let found = 0;


        movies.forEach(function (movie) {

            const movieCategory =
                movie.getAttribute("data-category");


            if (
                category === "all" ||
                movieCategory === category
            ) {

                movie.style.display = "block";

                found++;

            } else {

                movie.style.display = "none";

            }

        });


        if (found === 0) {

            noResult.style.display = "block";

        } else {

            noResult.style.display = "none";

        }

    });

});



// ================= WATCH MOVIE =================

function watchMovie(movieName) {

    alert(
        "You selected: " +
        movieName +
        "\n\nMovie player will open here."
    );

}



// ================= FAVORITE =================

function addFavorite(button) {

    const icon =
        button.querySelector("i");


    if (icon.classList.contains("bi-heart")) {

        icon.classList.remove("bi-heart");

        icon.classList.add("bi-heart-fill");

        button.style.color = "#e50914";

        alert("Movie added to favorites ❤️");

    } else {

        icon.classList.remove("bi-heart-fill");

        icon.classList.add("bi-heart");

        button.style.color = "#777";

        alert("Movie removed from favorites");

    }

}