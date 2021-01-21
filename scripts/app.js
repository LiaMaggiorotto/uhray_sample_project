console.log("Sanity Check");

$(document).ready(function () {
    $('[data-toggle=collapse-side]').click(function (e) {
        $('.side-collapse').toggleClass('in');
    });
});