$(function () {
    $('.inc_numb').each(function () {
        var $this = $(this);
        $this.attr('data-counter', 0);
        var end = Number($this.text());
        var initial = Math.floor(end * 0.75);
        $(this).click(function () {
            if ($this.attr('data-counter') == 0) {
                $this.text(`${initial}`);
                const animation = setInterval(function () {
                if($this.text() == end) {
                    clearInterval(animation);
                } else {
                    $this.text(`${Number($this.text()) + 1}`)
                }
                }, (2000 / (end - initial)));
                $this.attr('data-counter', 1);  
            }
        })
    });

    $('.inc_numb').each(function () {
        if ($(this).offset().top < window.innerHeight) {
            $(this).trigger('click');
        }
    });
    $(window).scroll(function () {
        $('section:not(:first-of-type):has(.inc_numb)').each(function () {
            if ($(window).scrollTop() >= $(this).prev().offset().top) {
                $(this).find('.inc_numb').each(function () {
                    $(this).trigger('click');
                })
            }
        })
    })
})