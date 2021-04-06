 
    $(function(){
        /* 스페셜 앨범 셋팅 */
        var specialWidth =  $('.wrap_special_gulim img').width();
        var specialHeight =  $('.wrap_special_gulim img').height();

        /* 세로형, 정사각형에 따라 액자 변형 */
        if (specialWidth < specialHeight) {
            $('.box_picture_frame').addClass('h_style');
        } else if (specialWidth === specialHeight) {
            $('.box_picture_frame').addClass('square_style');
        }
       
            
        /* 데이터 가져오기 -> 현재 가짜 임시데이터 */
        var gabegeStart = [];
        for (let i = 0; i < 500; i++) {
        gabegeStart.push({imgSrc : "https://source.unsplash.com/random?sig=" + i, national:"ko", workNum:"KKM-G2"});
        }
        

        /* 데이터에 대해서는 임의로 만들어서, 추후 실서버 반영시에는 개발에 따라 변형하시면 됩니다. */
        // 처음 30개. 
        function init() {
            var inititem = '';
            for (var i=0; i<30; i++) {
                inititem  += '<div class="box_item"  style="display:none"><img src="' + gabegeStart[i].imgSrc + '" class="view_img" /><div class="wrap_work" style="display:none"><span class="nation ' +  gabegeStart[i].national  + '"></span>' + gabegeStart[i].workNum + '</div></div>';       
            }   

            // 데이터를 붙이기. 
            $(".wrap_lightbox section").append(inititem);

            // append 후 최대한 자연스럽게 화면상에 렌더링되도록 작업.
            $(".box_item").fadeIn(2000);
            $(".view_img").ready(function(){
                $(".wrap_work").show();
            })

             // 첫번째 요소와 마지막 요소에 fst lst 클래스 주기.
            $('.box_item').first().addClass('fst');
            $('.box_item').last().addClass('lst');
        }        
        init();
        

        // 스크롤이 바닥에 닿기 500px 전부터 30개 씩 가져오기
        var j = 2;
        $(window).on("scroll", function() {
            var scrollHeight = $(document).height();
            var scrollPosition = $(window).height() + $(window).scrollTop(); 
            if (scrollPosition > scrollHeight - 500 && !$('.mypage').hasClass('on')) {  
                var t = '';
                for (var i=10*(j-1); i<30*j; i++) {               
                    if (gabegeStart.length > i) {
                        t  += '<div class="box_item"  style="display:none"><img src="' + gabegeStart[i].imgSrc + '" class="view_img" /><div class="wrap_work" style="display:none"><span class="nation ' +  gabegeStart[i].national  + '"></span>' + gabegeStart[i].workNum + '</div></div>';      
                    } 
                }   
                $(".wrap_lightbox section").append(t);
                $(".box_item").fadeIn(2000);
                $(".view_img").ready(function(){
                    $(".wrap_work").show();
                })
                $('.box_item').removeClass('lst').last().addClass('lst');
                j++;
            }
        });
              
        // 스페셜 액자에 있는 이미지 클릭시 lightbox 
        $(document).on('click', '.wrap_special_gulim img', function(){
            $(".lightbox").addClass('special').fadeIn(300);
            $(".lightbox").append("<div class='img_area'><img src='" + $(this).attr('src') + "' alt='" + $(this).attr("alt") + "' /><div class='close'></div></div>");
        });
        
        // 일반 액자에 있는 이미지 클릭시 lightbox
        $(document).on('click', '.wrap_lightbox img', function(){
            $(".lightbox").fadeIn(300);
            $(".lightbox").append("<div class='img_area'><div class='close'></div><img src='" + $(this).attr('src') + "' alt='" + $(this).attr("alt") + "' /><div class='arrowr'></div><div class='arrowl'></div></div>");
            //$("html").css("overflow", "hidden");
            $(this).parent().addClass('on');
            if ($(this).parent().hasClass("lst")) {
                $(".arrowr").css("display", "none");
                $(".arrowl").css("display", "block");
            } else if ($(this).parent().hasClass("fst")) {
                $(".arrowr").css("display", "block");
                $(".arrowl").css("display", "none");
            } 
            
        });
    $(document).on('click', '.wrap_lightbox .close', function(){
        $(".lightbox").fadeOut(300).removeClass('special');
        $(".wrap_lightbox h1").remove();
        $(".lightbox .img_area").remove();
        $('.wrap_lightbox .on').removeClass('on');
    });

    // esc 누를시 lightbox 제거.
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
        $(".lightbox").fadeOut(300);
        $(".lightbox img").remove();
        }
  });

  // prev 보기와 next 보기 기능이 있음.
  $(document).on('click', ".arrowr", function(){
    $('.wrap_lightbox .on').next().addClass('on').end().removeClass('on');
    var newImage = $('.wrap_lightbox .on').children().attr('src');
    $(".lightbox img").attr("src", newImage);

    if (!$('.wrap_lightbox .on').hasClass("lst")) {
      $(".arrowl").css("display", "block");
    } else {
      $(".arrowr").css("display", "none");
    }
  });
  $(document).on('click', ".arrowl", function(){
     $('.wrap_lightbox .on').prev().addClass('on').end().removeClass('on');
    var newImage = $('.wrap_lightbox .on').children().attr('src');
    $(".lightbox img").attr("src", newImage);

    if (!$('.wrap_lightbox .on').hasClass("fst")) {
      $(".arrowr").css("display", "block");
    } else {
      $(".arrowl").css("display", "none");
    }
  });
    });
    
// $('.wrap_login .mask').height();