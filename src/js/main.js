$(document).ready(function () {
    console.log("ready");
    let caruselData = [
        { 
            img: "/dist/images/summer.jpg", 
            title: "Enjoy our hot summer deals", 
            price: "from £69<sup>.50</sup>" 
        },
        { 
            img: "/dist/images/winter.jpeg", 
            title: "Enjoy our cold winter deals", 
            price: "from £79<sup>.90</sup>" 
        }
    ];

    let currentActive = 0;
    let rb = $("#RightControl");
    let lb = $("#LeftControl");

    function updateCarusel(data) {
        $("header").attr("style", "background-image: url('" + data.img + "')");
        $("#carusel .subtitle").text(data.title);
        $("#carusel .price").html(data.price);
    }
    updateCarusel(caruselData[currentActive])
    if (currentActive == caruselData.length - 1) {
        rb.addClass("btn-disabled")
    }
    if (currentActive == 0) {
        lb.addClass("btn-disabled")
    }
    rb.on("click", function () {
        if (rb.hasClass("btn-disabled")) return;
        currentActive = (currentActive + 1) % caruselData.length;
        if (currentActive == caruselData.length - 1) {
            rb.addClass("btn-disabled")
        }
        lb.removeClass("btn-disabled");
        updateCarusel(caruselData[currentActive])
    });
    lb.on("click", function () {
        if (lb.hasClass("btn-disabled")) return;
        currentActive = (currentActive - 1);
        if (currentActive == 0) {
            lb.addClass("btn-disabled")
        }
        rb.removeClass("btn-disabled");
        updateCarusel(caruselData[currentActive])
    });

    //Tab component
    $('.tabControl .tabLinks').on("click", ".tabLink-item", function(event){
        if($(event.target).hasClass("tabLink-active")) return;
        let active = $(event.target).parent().children(".tabLink-active");
        active.removeClass("tabLink-active");
        $(active.data("tab")).removeClass("tabContent-active");
        $(event.target).addClass("tabLink-active");
        $($(event.target).data("tab")).addClass("tabContent-active");
    });

});

