(function () {
    'use Strict';
    $(document).ready(function () {

        $("#testCarousel").carousel({
            interval: 5000 // 5 seconds
        }).carousel("pause");
        // pause on hover
    });
})();
