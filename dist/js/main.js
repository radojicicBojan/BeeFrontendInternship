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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVhZHlcIik7XHJcbiAgICBsZXQgY2FydXNlbERhdGEgPSBbXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgaW1nOiBcIi9kaXN0L2ltYWdlcy9zdW1tZXIuanBnXCIsIFxyXG4gICAgICAgICAgICB0aXRsZTogXCJFbmpveSBvdXIgaG90IHN1bW1lciBkZWFsc1wiLCBcclxuICAgICAgICAgICAgcHJpY2U6IFwiZnJvbSDCozY5PHN1cD4uNTA8L3N1cD5cIiBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIGltZzogXCIvZGlzdC9pbWFnZXMvd2ludGVyLmpwZWdcIiwgXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkVuam95IG91ciBjb2xkIHdpbnRlciBkZWFsc1wiLCBcclxuICAgICAgICAgICAgcHJpY2U6IFwiZnJvbSDCozc5PHN1cD4uOTA8L3N1cD5cIiBcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIGxldCBjdXJyZW50QWN0aXZlID0gMDtcclxuICAgIGxldCByYiA9ICQoXCIjUmlnaHRDb250cm9sXCIpO1xyXG4gICAgbGV0IGxiID0gJChcIiNMZWZ0Q29udHJvbFwiKTtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVDYXJ1c2VsKGRhdGEpIHtcclxuICAgICAgICAkKFwiaGVhZGVyXCIpLmF0dHIoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtaW1hZ2U6IHVybCgnXCIgKyBkYXRhLmltZyArIFwiJylcIik7XHJcbiAgICAgICAgJChcIiNjYXJ1c2VsIC5zdWJ0aXRsZVwiKS50ZXh0KGRhdGEudGl0bGUpO1xyXG4gICAgICAgICQoXCIjY2FydXNlbCAucHJpY2VcIikuaHRtbChkYXRhLnByaWNlKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUNhcnVzZWwoY2FydXNlbERhdGFbY3VycmVudEFjdGl2ZV0pXHJcbiAgICBpZiAoY3VycmVudEFjdGl2ZSA9PSBjYXJ1c2VsRGF0YS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgcmIuYWRkQ2xhc3MoXCJidG4tZGlzYWJsZWRcIilcclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50QWN0aXZlID09IDApIHtcclxuICAgICAgICBsYi5hZGRDbGFzcyhcImJ0bi1kaXNhYmxlZFwiKVxyXG4gICAgfVxyXG4gICAgcmIub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHJiLmhhc0NsYXNzKFwiYnRuLWRpc2FibGVkXCIpKSByZXR1cm47XHJcbiAgICAgICAgY3VycmVudEFjdGl2ZSA9IChjdXJyZW50QWN0aXZlICsgMSkgJSBjYXJ1c2VsRGF0YS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRBY3RpdmUgPT0gY2FydXNlbERhdGEubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICByYi5hZGRDbGFzcyhcImJ0bi1kaXNhYmxlZFwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsYi5yZW1vdmVDbGFzcyhcImJ0bi1kaXNhYmxlZFwiKTtcclxuICAgICAgICB1cGRhdGVDYXJ1c2VsKGNhcnVzZWxEYXRhW2N1cnJlbnRBY3RpdmVdKVxyXG4gICAgfSk7XHJcbiAgICBsYi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAobGIuaGFzQ2xhc3MoXCJidG4tZGlzYWJsZWRcIikpIHJldHVybjtcclxuICAgICAgICBjdXJyZW50QWN0aXZlID0gKGN1cnJlbnRBY3RpdmUgLSAxKTtcclxuICAgICAgICBpZiAoY3VycmVudEFjdGl2ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxiLmFkZENsYXNzKFwiYnRuLWRpc2FibGVkXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJiLnJlbW92ZUNsYXNzKFwiYnRuLWRpc2FibGVkXCIpO1xyXG4gICAgICAgIHVwZGF0ZUNhcnVzZWwoY2FydXNlbERhdGFbY3VycmVudEFjdGl2ZV0pXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1RhYiBjb21wb25lbnRcclxuICAgICQoJy50YWJDb250cm9sIC50YWJMaW5rcycpLm9uKFwiY2xpY2tcIiwgXCIudGFiTGluay1pdGVtXCIsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICBpZigkKGV2ZW50LnRhcmdldCkuaGFzQ2xhc3MoXCJ0YWJMaW5rLWFjdGl2ZVwiKSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBhY3RpdmUgPSAkKGV2ZW50LnRhcmdldCkucGFyZW50KCkuY2hpbGRyZW4oXCIudGFiTGluay1hY3RpdmVcIik7XHJcbiAgICAgICAgYWN0aXZlLnJlbW92ZUNsYXNzKFwidGFiTGluay1hY3RpdmVcIik7XHJcbiAgICAgICAgJChhY3RpdmUuZGF0YShcInRhYlwiKSkucmVtb3ZlQ2xhc3MoXCJ0YWJDb250ZW50LWFjdGl2ZVwiKTtcclxuICAgICAgICAkKGV2ZW50LnRhcmdldCkuYWRkQ2xhc3MoXCJ0YWJMaW5rLWFjdGl2ZVwiKTtcclxuICAgICAgICAkKCQoZXZlbnQudGFyZ2V0KS5kYXRhKFwidGFiXCIpKS5hZGRDbGFzcyhcInRhYkNvbnRlbnQtYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
