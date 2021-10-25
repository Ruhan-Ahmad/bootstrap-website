    let spinnerWrapper = document.querySelector('.spinner-wrapper');
            window.addEventListener('load', function () {
                spinnerWrapper.parentElement.removeChild(spinnerWrapper);
                $('.hidden').removeClass("hidden");
            });

        $('.navbar-nav li a').click(function (e) {

            $('.navbar-nav li a.active').removeClass('active');

            var $this = $(this);
            $this.addClass('active');
        });

        $('.content a button').click(function (e) {
            $('.navbar-nav li a.active').removeClass('active');

            $('.navbar-nav li .about').addClass('active');
        });

        $('.card-body a').click(function(e){
            $('.navbar-nav li a.active').removeClass('active');

            $('.navbar-nav li .services').addClass('active');
        });

        window.addEventListener('scroll', function () {
            var header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });