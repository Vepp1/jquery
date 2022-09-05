$(document).ready(function() {
    $("#stream1_btn").click(function() {
     $(".stream2").removeClass('highlight_stream');
     $(".stream1").removeClass('highlight_stream');
     $(".stream2").removeClass('highlight_stream');
     $(".stream3").addClass('highlight_stream');
     //    $(".stream1").hide();
     //    $(".stream1").toggle('slow');
     //    $(".stream1").slideDown('medium');
     //    $(".stream1").slideUp('fast');
     //    $(".stream1").slideToggle('fast');
     //    $(".stream1").show(1000);
     //    $(".stream1").fadeIn(1000);
     //    $(".stream1").fadeOut(1000);
     //    $(".stream1").fadeToggle(1000)
     //    $(".stream1").fadeTo(1000, 0.5)
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 