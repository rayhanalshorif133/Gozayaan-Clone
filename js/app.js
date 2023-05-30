// dependencies
const navBarHandler = () => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            $("#brand-header").addClass('bg-default shadow-sm');
            $(".header_middle .row").removeClass('d-none');
        } else {
            $("#brand-header").removeClass("bg-default shadow-sm");
            $(".header_middle .row").addClass('d-none');
        }
    });
}

const randomDemoLocationInput = () => {

    var locations = [
        "Dhaka",
        "Chittagong",
        "Sylhet",
        "Rajshahi",
        "Khulna",
        "Barishal",
        "Rangpur",
        "Mymensingh",
        "Cox's Bazar",
        "Bandarban",
        "Kuakata",
        "Sundarban",
        "Saint Martin",
        "Jaflong",
        "Sajek",
        "Ratargul",
        "Bichanakandi",
        "Boga Lake",
        "Nilgiri",
        "Madhabkunda",
        "Kaptai",
        "Bagerhat",
        "Paharpur",
        "Mahasthangarh",
        "Sonargaon",
        "Mainamati",
        "Kantaji Temple",
        "Lalbagh Fort",
        "Ahsan Manzil",
        "Star Mosque",
    ];


    var html = `
    <div class="location">
       <div class="icon"> <img src="./images/svg/map-marker-grey.svg">
        </div>
        <div class="name"
            data-name="Cox's Bazar">
             Cox's Bazar
              </div>
        </div>
    `;

    for (let i = 0; i < locations.length; i++) {
        html += `
        <div class="location">
              <div class="icon"> <img src="./images/svg/map-marker-grey.svg">
                </div>
                <div class="name"
                    data-name="${locations[i]}">
                        ${locations[i]}
                        </div>
                </div>
        `;
    }

    $(".location-list").html(html);
}

const tourLocationHandler = () => {
    $(".location_box").click(function () {
        $(".location-suggestion").removeClass("d-none");
    });

    $("#searchLocation").keyup(function () {
        var value = $(this).val().toLowerCase();
        $(".location-list .location .name").filter(function () {
            var name = $(this).text().toLowerCase();
            $(this).parent().toggle(name.indexOf(value) > -1);
        });
    });

    $("#searchLocation").focusout(function () {
        $(".location-suggestion").addClass("d-none");
    });


    $(document).on('click', ".location-list .location", function (e) {
        var name = $(this).find(".name").data("name");
        $(".location_box").find(".value").text(name);
        $(".location-suggestion").addClass("d-none");
        // hit backend using axios
    });
}

const handleHotDealsOwlCarousel = () => {

    const showItems = $(".hot_deals_slider").data("show-items");

    $(".hot_deals_slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: showItems - 2,
            },
            600: {
                items: showItems - 1,
            },
            1000: {
                items: showItems,
            },
        },

    });

    $(".owl-carousel .owl-nav button.owl-prev").html('<i class="fas fa-chevron-left"></i>');
    $(".owl-carousel .owl-nav button.owl-next").html('<i class="fas fa-chevron-right"></i>');
}

const handlePromotionSliderOwlCarousel = () => {
    const showItems = $(".promotion_slider").data("show-items");
    const minus_items = showItems > 2 ? 2 : 1;
    $(".promotion_slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: showItems - minus_items,
            },
            600: {
                items: showItems - minus_items,
            },
            1000: {
                items: showItems,
            },
        },

    });

    $(".owl-carousel .owl-nav button.owl-prev").html('<i class="fas fa-chevron-left"></i>');
    $(".owl-carousel .owl-nav button.owl-next").html('<i class="fas fa-chevron-right"></i>');
};


const handlePopularDestinationsSliderOwlCarousel = () => {
    const showItems = $(".popular_destinations_slider").data("show-items");
    const minus_items = showItems > 2 ? 2 : 1;
    $(".popular_destinations_slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: showItems - minus_items,
            },
            600: {
                items: showItems - minus_items,
            },
            1000: {
                items: showItems,
            },
        },

    });

    $(".owl-carousel .owl-nav button.owl-prev").html('<i class="fas fa-chevron-left"></i>');
    $(".owl-carousel .owl-nav button.owl-next").html('<i class="fas fa-chevron-right"></i>');
};


const handlePopularToursSliderOwlCarousel = () => {
    const showItems = $(".popular_tours_slider").data("show-items");
    const minus_items = showItems > 2 ? 2 : 1;
    $(".popular_tours_slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: showItems - minus_items,
            },
            600: {
                items: showItems - minus_items,
            },
            1000: {
                items: showItems,
            },
        },

    });

    $(".owl-carousel .owl-nav button.owl-prev").html('<i class="fas fa-chevron-left"></i>');
    $(".owl-carousel .owl-nav button.owl-next").html('<i class="fas fa-chevron-right"></i>');
};



// app
const app = () => {
    navBarHandler();
    randomDemoLocationInput();

    $(function () {
        // Hit backend is here
        tourLocationHandler();


        handleHotDealsOwlCarousel();
        handlePromotionSliderOwlCarousel();
        handlePopularDestinationsSliderOwlCarousel();
        handlePopularToursSliderOwlCarousel();
    });
}


// run app
app();

