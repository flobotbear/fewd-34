
    $(".red").click(
        function() {
                // alert("this will turn the planet red");
                $(".planet-circle").addClass("red").removeClass("orange yellow green blue");
        });

    $(".orange").click(
        function() {
                // alert("this will turn the planet orange");
                $(".planet-circle").addClass("orange").removeClass("red yellow green blue");
                //toggleClass
        });

    $(".yellow").click(
        function() {
                // alert("this will turn the planet yellow");
                $(".planet-circle").addClass("yellow").removeClass("orange red green blue");
        });

    $(".green").click(
        function() {
                // alert("this will turn the planet green");
                $(".planet-circle").addClass("green").removeClass("orange yellow red blue");
        });

    $(".blue").click(
        function() {
                // alert("this will turn the planet blue");
                $(".planet-circle").addClass("blue").removeClass("orange yellow green red");
        });



// RINGS OR NO RINGS
$(document).ready(function(){
    if ($("#no-rings").prop("checked", true)) {
        $(".ring").hide();
        // alert("Hello");
    }
    else {
        $(".ring").show();
        // alert("Goodbye");
    }
});
    $("#rings").click(
        function() {
                $(".ring").show();
        });
    $("#no-rings").click(
        function() {
            $(".ring").hide();
        });


    // TOGGLING RINGS
    // $("#rings").click(
    //     function() {
    //             $(".planet-circle").addClass("planet-circle-rings");
    //     });
    // $("#no-rings").click(
    //     function() {
    //         $(".planet-circle").removeClass("planet-circle-rings");
    //     });


// DETERMINING THE SIZE OF THE PLANET
        // Relevant classes:
        //     .irs-single <--- the span that holds the current value the user has selected on the slider
        //     detect textContent, which leads to adding class or CSS properties
        //     Maybe use event mousemove
        //     $(this) -- could be helpful


   // if ($(".irs-single").text() == "Mars") {
   //     // $(".planet-circle").addClass("mars").removeClass("");
   //     alert("This is the size of Mars");
   // } else {
   //     alert("This is not the size of Mars")
   // }




    // $(".clickable").click(
    //     function() {
    //         if () {
    //
    //         } else {
    //
    //         };
    //     }
    // );

// Fire an event to respond to the slider value -- use clicks first
