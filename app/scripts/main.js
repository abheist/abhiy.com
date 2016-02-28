jQuery(document).ready(function($) {
    // $('.nav-button').click(function(event) {
    //     /* Act on the event */
    //     // $('.mobile-nav').toggle();
    //     $('.nav-button-icon').toggle(function() {
    //         /* Stuff to do every *odd* time the element is clicked */
    //         $('nav-button').html('<i class="nav-button-icon fa fa-bars fa-2x"></i>');
    //     }, function() {
    //         /* Stuff to do every *even* time the element is clicked */
    //         $('nav-button').html('<i class="nav-button-icon fa fa-times fa-2x"></i>');

    //     });
    // });

    $('#menu-icon-trigger').click(function(e) {
        e.preventDefault();
         $('.mobile-nav').toggle();
        $('#menu-icon-wrapper').toggleClass('open');
    });
});
