jQuery(function (f) {
    var element = f('.offer__wraper');
    f(window).scroll(function () {
        element['fade' + (f(this).scrollTop() > 200 ? 'In' : '')](500);
    });
});

jQuery(function (f) {
    var element = f('.offer__text');
    f(window).scroll(function () {
        element['fade' + (f(this).scrollTop() > 400 ? 'In' : '')](500);
    });
});

jQuery(function (f) {
    var element = f('.offer__form');
    f(window).scroll(function () {
        element['fade' + (f(this).scrollTop() > 600 ? 'In' : '')](500);
    });
});

jQuery(function (f) {
    var element = f('.offer__button');
    f(window).scroll(function () {
        element['fade' + (f(this).scrollTop() > 800 ? 'In' : '')](500);
    });
});

jQuery(function (f) {
    var element = f('.offer__comment');
    f(window).scroll(function () {
        element['fade' + (f(this).scrollTop() > 1000 ? 'In' : '')](500);
    });
});

jQuery(function (f) {
    var element = f('.offer__arrow');
    f(window).scroll(function () {
        element['fade' + (f(this).scrollTop() > 1200 ? 'In' : '')](500);
    });
});
