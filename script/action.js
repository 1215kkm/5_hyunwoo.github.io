$(document).ready(function(){

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    // Section1 마우스 오버 시 화살표 효과
    $('.section1 h1').mouseenter(function(){
        $('.arrow1 img').show();
    })
    $('.section1 h1').mouseout(function(){
        $('.arrow1 img').hide();
    })
    $('.section1 h2').mouseenter(function(){
        $('.arrow2 img').show();
    })
    $('.section1 h2').mouseout(function(){
        $('.arrow2 img').hide();
    })
    // Section1 클릭 효과 및 이동
    $('.section1 h1').click(function(){
        $('.section2').show();
        setTimeout(function(){
            $('.section1').fadeOut(2000);
        }, 1000);            
    })
    // Section2 스누피 클릭 이동
    $('.sec2_snoopy_closed').mouseenter(function(){
        $('.sec2_snoopy_closed').hide();
        $('.sec2_snoopy_opened').show();
    })
    $('.sec2_snoopy_closed').mouseout(function(){
        $('.sec2_snoopy_closed').show();
        $('.sec2_snoopy_opened').hide();
    })
    $('.sec2_snoopy_opened').click(function(){
        setTimeout(function(){
            $('.section1').fadeIn(2000);
        });
    })

    $('.snoopymoon').mouseenter(function(){
        $('.snoopymoon').hide();
        $('.snoopymoon_go').show();
    })
    $('.snoopymoon').mouseout(function(){
        $('.snoopymoon').show();
        $('.snoopymoon_go').hide();
    })
    // 프로필 말풍선 효과
    $('.cb_bubble').click(function(){
        $('.section2 .cb_click').fadeOut(500);
        setTimeout(function(){
            $('.profile_bub1').fadeIn(1000);
        }, 500);
        setTimeout(function(){
            $('.profile_bub2').fadeIn(1000);
        }, 1500);
        setTimeout(function(){
            $('.profile_bub3').fadeIn(1000);
        }, 2500);
    })
    $('.sn_bubble').click(function(){
        $('.section2 .sn_click').fadeOut(500);
        setTimeout(function(){
            $('.profile_bub4').fadeIn(1000);
        }, 500);
        setTimeout(function(){
            $('.profile_bub5').fadeIn(1000);
        }, 1500);
        setTimeout(function(){
            $('.profile_bub6').fadeIn(1000);
        }, 2500);
    })
    // Section3 스크롤 금지
    $('.section3').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
    // Section2 --> Section4
    var sec3Top = $('.section3').offset().top;
    $('.section2 .snoopymoon_go').click(function(){
        $('html,body').stop().animate({scrollTop:sec3Top},0)
        $('.section3').addClass('action')
        $('.section2').fadeOut(2000);
        setTimeout(function(){
            $('.section3').fadeOut(3000);
        }, 12000);
    })
    // Section1 --> Section4
    $('.section1 h2').click(function(){
        $('html,body').stop().animate({scrollTop:sec3Top},0)
        $('.section3').addClass('action')
        $('.section1').fadeOut(2000);
        $('.section2').hide();
        setTimeout(function(){
            $('.section3').fadeOut(3000);
        }, 12000);
    })
    // Section4 --> Section1
    $('.section4 .space_float_snoopy').click(function(){
        $('.section1').fadeIn(2000);
    })
    // Section4 --> Section5
    $('.section4 .space_float_charlie').click(function(){
        $('.section4').fadeOut(1000);
    })
    // Section5 --> Detail
    $('.ajouthumb , .ajoumthumb').click(function(){
        $('.ajou').show();
        $('.section5').hide();
        window.scrollTo(0, 0);
    })
    $('.lsthumb').click(function(){
        $('.star').show();
        $('.section5').hide();
        window.scrollTo(0, 0);
    })
    $('.applethumb').click(function(){
        $('.apple').show();
        $('.section5').hide();
        window.scrollTo(0, 0);
    })
    // Section5 --> Back
    $('.web_back').click(function(){
        $('.section4').fadeIn(1000);
    })
    $('.ajou_back').click(function(){
        $('.section5').show();
        $('.ajou').hide();
    })
    $('.star_back').click(function(){
        $('.section5').show();
        $('.star').hide();
    })
    $('.apple_back').click(function(){
        $('.section5').show();
        $('.apple').hide();
    })
    // Section4 스크롤 금지
    $('.section4').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });

})