$(document).ready(function () {
    console.log("ready");
    let caruselData = [
        { 
            img: "/dist/images/summer.jpg", 
            title: "Enjoy our hot summer deals", 
            price: "from £69<sup>.50</sup>" 
        },
        { 
            img: "/dist/images/summer.jpg", 
            title: "Enjoy our ssss summer deals", 
            price: "from £69<sup>.50</sup>" 
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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVhZHlcIik7XHJcbiAgICBsZXQgY2FydXNlbERhdGEgPSBbXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgaW1nOiBcIi9kaXN0L2ltYWdlcy9zdW1tZXIuanBnXCIsIFxyXG4gICAgICAgICAgICB0aXRsZTogXCJFbmpveSBvdXIgaG90IHN1bW1lciBkZWFsc1wiLCBcclxuICAgICAgICAgICAgcHJpY2U6IFwiZnJvbSDCozY5PHN1cD4uNTA8L3N1cD5cIiBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIGltZzogXCIvZGlzdC9pbWFnZXMvc3VtbWVyLmpwZ1wiLCBcclxuICAgICAgICAgICAgdGl0bGU6IFwiRW5qb3kgb3VyIHNzc3Mgc3VtbWVyIGRlYWxzXCIsIFxyXG4gICAgICAgICAgICBwcmljZTogXCJmcm9tIMKjNjk8c3VwPi41MDwvc3VwPlwiIFxyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgbGV0IGN1cnJlbnRBY3RpdmUgPSAwO1xyXG4gICAgbGV0IHJiID0gJChcIiNSaWdodENvbnRyb2xcIik7XHJcbiAgICBsZXQgbGIgPSAkKFwiI0xlZnRDb250cm9sXCIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNhcnVzZWwoZGF0YSkge1xyXG4gICAgICAgICQoXCJoZWFkZXJcIikuYXR0cihcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdcIiArIGRhdGEuaW1nICsgXCInKVwiKTtcclxuICAgICAgICAkKFwiI2NhcnVzZWwgLnN1YnRpdGxlXCIpLnRleHQoZGF0YS50aXRsZSk7XHJcbiAgICAgICAgJChcIiNjYXJ1c2VsIC5wcmljZVwiKS5odG1sKGRhdGEucHJpY2UpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlQ2FydXNlbChjYXJ1c2VsRGF0YVtjdXJyZW50QWN0aXZlXSlcclxuICAgIGlmIChjdXJyZW50QWN0aXZlID09IGNhcnVzZWxEYXRhLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICByYi5hZGRDbGFzcyhcImJ0bi1kaXNhYmxlZFwiKVxyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRBY3RpdmUgPT0gMCkge1xyXG4gICAgICAgIGxiLmFkZENsYXNzKFwiYnRuLWRpc2FibGVkXCIpXHJcbiAgICB9XHJcbiAgICByYi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAocmIuaGFzQ2xhc3MoXCJidG4tZGlzYWJsZWRcIikpIHJldHVybjtcclxuICAgICAgICBjdXJyZW50QWN0aXZlID0gKGN1cnJlbnRBY3RpdmUgKyAxKSAlIGNhcnVzZWxEYXRhLmxlbmd0aDtcclxuICAgICAgICBpZiAoY3VycmVudEFjdGl2ZSA9PSBjYXJ1c2VsRGF0YS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIHJiLmFkZENsYXNzKFwiYnRuLWRpc2FibGVkXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxiLnJlbW92ZUNsYXNzKFwiYnRuLWRpc2FibGVkXCIpO1xyXG4gICAgICAgIHVwZGF0ZUNhcnVzZWwoY2FydXNlbERhdGFbY3VycmVudEFjdGl2ZV0pXHJcbiAgICB9KTtcclxuICAgIGxiLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChsYi5oYXNDbGFzcyhcImJ0bi1kaXNhYmxlZFwiKSkgcmV0dXJuO1xyXG4gICAgICAgIGN1cnJlbnRBY3RpdmUgPSAoY3VycmVudEFjdGl2ZSAtIDEpO1xyXG4gICAgICAgIGlmIChjdXJyZW50QWN0aXZlID09IDApIHtcclxuICAgICAgICAgICAgbGIuYWRkQ2xhc3MoXCJidG4tZGlzYWJsZWRcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmIucmVtb3ZlQ2xhc3MoXCJidG4tZGlzYWJsZWRcIik7XHJcbiAgICAgICAgdXBkYXRlQ2FydXNlbChjYXJ1c2VsRGF0YVtjdXJyZW50QWN0aXZlXSlcclxuICAgIH0pO1xyXG5cclxuICAgIC8vVGFiIGNvbXBvbmVudFxyXG4gICAgJCgnLnRhYkNvbnRyb2wgLnRhYkxpbmtzJykub24oXCJjbGlja1wiLCBcIi50YWJMaW5rLWl0ZW1cIiwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIGlmKCQoZXZlbnQudGFyZ2V0KS5oYXNDbGFzcyhcInRhYkxpbmstYWN0aXZlXCIpKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGFjdGl2ZSA9ICQoZXZlbnQudGFyZ2V0KS5wYXJlbnQoKS5jaGlsZHJlbihcIi50YWJMaW5rLWFjdGl2ZVwiKTtcclxuICAgICAgICBhY3RpdmUucmVtb3ZlQ2xhc3MoXCJ0YWJMaW5rLWFjdGl2ZVwiKTtcclxuICAgICAgICAkKGFjdGl2ZS5kYXRhKFwidGFiXCIpKS5yZW1vdmVDbGFzcyhcInRhYkNvbnRlbnQtYWN0aXZlXCIpO1xyXG4gICAgICAgICQoZXZlbnQudGFyZ2V0KS5hZGRDbGFzcyhcInRhYkxpbmstYWN0aXZlXCIpO1xyXG4gICAgICAgICQoJChldmVudC50YXJnZXQpLmRhdGEoXCJ0YWJcIikpLmFkZENsYXNzKFwidGFiQ29udGVudC1hY3RpdmVcIik7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuIl0sImZpbGUiOiJtYWluLmpzIn0=
