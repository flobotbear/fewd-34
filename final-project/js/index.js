
    $(".red").click(
        function() {
                // alert("this will turn the planet red");
                $(".planet-circle").toggleClass("red");
        });

    $(".orange").click(
        function() {
                // alert("this will turn the planet orange");
                $(".planet-circle").toggleClass("orange");
                //toggleClass
        });

    $(".yellow").click(
        function() {
                // alert("this will turn the planet yellow");
                $(".planet-circle").toggleClass("yellow");
        });

    $(".green").click(
        function() {
                // alert("this will turn the planet green");
                $(".planet-circle").toggleClass("green");
        });

    $(".blue").click(
        function() {
                // alert("this will turn the planet blue");
                $(".planet-circle").toggleClass("blue");
        });



// RINGS OR NO RINGS
// $(document).ready(function(){
//     if ($("#no-rings").prop("checked", true)) {
//         $(".ring").hide();
//         // alert("Hello");
//     }
//     else {
//         $(".ring").show();
//         // alert("Goodbye");
//     }
// });
    // TOGGLING RINGS
    $("#rings").click(
        function() {
                $(".ring").show();
        });
    $("#no-rings").click(
        function() {
                $(".ring").hide();
        });


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




    $(".clickable").click(
        function() {
            // Size of Mars
            if ($(".irs-single").text() == "Mars") {
                // $(".planet-circle").toggleClass("mars");
                alert("This is the size of Mars");
            } else {
                alert("This is not the size of Mars");
            };
        }
    );

// Fire an event to respond to the slider value -- use clicks first
