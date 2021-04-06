// 임시 로그인 id 와 pwd 설정 => 추후 삭제.
var gabageLogin = {
    id : 'admin',
    pwd : '1'
} 

// 모든 팝업의 x 버튼 클릭시 팝업닫기.
$('.wrap_pop .btn_close').on('click', function(){
    $(this).closest('.wrap_pop').hide();    
})

/* 값검증 함수 */
// 연락처
var regExp = /^\d{3}-?\d{3,4}-?\d{4}$/;
var regExpMsg = '연락처를 정확하게 입력해주세요.'

// 인증번호
var regCertiNum = /^[0-9]+$/;
var regCertiNumMsg = '인증번호 숫자를 넣어주세요.'
    
// 아이디 - 이메일
var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
var regEmailMsg = '이메일 형식에 맞게 입력해주세요.'

// 비밀번호 
var regPwd = /^[a-zA-Z0-9]{8,20}$/;
var regPwdMsg = '비밀번호는 숫자와 영문자 조합으로 8~20자리를 사용해야 합니다.';

// 이름
var regName = /^[가-힣]{2,5}$/;
var regNameMsg = '이름을 정확하게 입력해주세요.'


// 정규식을 통한 값 검증 함수 - 연락처, 인증번호, 아이디, 이름을 검증할 수 있음.
function certiChkfun(targetEl, regCondition, msg) {
    var regChk = regCondition;
    if( !regChk.test($(targetEl).val()) ) {
        alert(msg);
         $(targetEl).focus();
        return false;      
    } else {
        return true;
    }
}

// 정규식을 통한 비밀번호 검증 함수
function chkPW(targetEl){
    var pw = $(targetEl).val();
    var num = pw.search(/[0-9]/g);
    var eng = pw.search(/[a-z]/ig);
    if(pw.length < 8 || pw.length > 20){
        alert("8자리 ~ 20자리 이내로 입력해주세요.");
        return false;
    }
    else if(pw.search(/\s/) != -1){
        alert("비밀번호는 공백 없이 입력해주세요.");
        return false;
    }
    else if(num < 0 || eng < 0){
        alert("영문,숫자를 혼합하여 입력해주세요.");
        return false;
    }
    else {
        return true;
    }
}

// 비밀번호 확인 함수
function matchPwd(target, diftarget , erroMsg) {
    if ($(target).val() != $(diftarget).val()) {
        $(erroMsg).addClass('on');
        return false;
    } else {
        $(erroMsg).removeClass('on');
        return true;
    }
}

// 인증번호 전송 버튼 클릭시 타이머에 대한 함수.
function $ComTimer(){
    //prototype extend
}

$ComTimer.prototype = {
    comSecond : ""
    , fnCallback : function(){}
    , timer : ""
    , domId : ""
    , fnTimer : function(){
        var m = Math.floor(this.comSecond / 60) + ": " + (this.comSecond % 60);	// 남은 시간 계산
        this.comSecond--;					// 1초씩 감소
        console.log(m);
        this.domId.innerText = m;
        if (this.comSecond < 0) {			// 시간이 종료 되었으면..
            clearInterval(this.timer);		// 타이머 해제
            alert("인증시간이 초과하였습니다. 다시 인증해주시기 바랍니다.");
            $('.dis_certi').removeClass('dis_certi');
        }
    }
    ,fnStop : function(){
        clearInterval(this.timer);
    }
}

function certiTimer(target) {
    var AuthTimer = new $ComTimer();
    AuthTimer.comSecond = 179;
    AuthTimer.fnCallback = function(){alert("다시인증을 시도해주세요.")}
    AuthTimer.timer =  setInterval(function(){AuthTimer.fnTimer()},1000);
    AuthTimer.domId = document.getElementById(target);
    $('.wrap_pop .btn_close').on('click', function(){
        AuthTimer.fnStop();
        $('.timer').children().empty();
        $('.dis_certi').removeClass('dis_certi');
    });
}


/* 로그인 */
function loginLogic() {
    // 빈값일때
    if ($('#login_id').val() === '' || $('#login_pwd').val() === '') {
        alert('아이디와 패스워드를 입력해주세요.')
    }
    // 아이디와 비번이 맞을때
    else if ($('#login_id').val() === gabageLogin.id && $('#login_pwd').val() === gabageLogin.pwd ) {
        $('.wrap_login, .mask').hide();
        $('body').removeClass('noScroll');
    } 
    // 아이디와 비번이 틀릴때 팝업    
    else {
        $('.pop_miss_login').show();
    }
}

// 로그인 버튼을 클릭하거나 엔터
$('#btn_login').on('click', function(){
    loginLogic()
})
$('#login_pwd').on('keydown', function(key){
    if (key.keyCode == 13) {
        loginLogic()
    }
});


// 계정찾기 
$('#btn_find_account, .box_login .search').on('click', function() {
    $(this).closest('.wrap_pop').hide();
    $('.find_account').show();
})

// 비번찾기
$('#btn_find_pwd, .link_pwd, .box_login .sch_pwd').on('click', function() {
    $(this).closest('.wrap_pop').hide();
    $('.find_password').show();
})

// 계정찾기 - 인증번호 전송 버튼
$('#btn_findid_certi').on('click', function() {
    // 연락처 정보   
    var hpChk = certiChkfun('#find_certi1', regExp, regExpMsg);
    //검증성공시.
    if (hpChk) {
         if (!$(this).hasClass('dis_certi')) {
            certiTimer("timer_findid");
        }         
        $(this).addClass('dis_certi');
    };
})


// 계정찾기 - 인증 버튼
$('#btn_findid_certi_chk').on('click', function() {
    // 인증번호 : 숫자만 넣기.
    var certiNumChk =  certiChkfun('#find_certi2', regCertiNum, regCertiNumMsg);
     //검증성공시.
    if (certiNumChk) {
        $(this).closest('.wrap_pop').hide();
        $('.find_account_result').show();
    }
})


// 비밀번호찾기 - 인증번호 전송 버튼
$('#btn_findpwd_certi').on('click', function() {
    // 연락처 정보   
    var hpChk = certiChkfun('#find_pwd_certi1', regExp, regExpMsg);
    if (hpChk) {
        if (!$(this).hasClass('dis_certi')) {
            certiTimer("timer_findpwd");
        }         
        $(this).addClass('dis_certi');
    };
})

// 비밀번호찾기  - 인증 버튼
$('#btn_findpwd_certi_chk').on('click', function() {
    // 인증번호 : 숫자만 넣기.
    var certiNumChk =  certiChkfun('#find_pwd_certi2', regCertiNum, regCertiNumMsg)
    if (certiNumChk) {
        $(this).closest('.wrap_pop').hide();
        $('.find_account_result').show();
    }
})
// 비밀번호찾기 결과페이지에서 로그인 클릭
$('.link_login').on('click', function() {
    $(this).closest('.wrap_pop').hide();
});

// 비밀번호 결과 팝업에서 비밀번호 변경
$('.btn_chg_pwd').on('click', function(){
    if ($('#current_pwd').val()  !== gabageLogin.pwd) {
        alert('기존 비밀번호를 정확하게 입력해주세요.');
        return false;
    }
    if ($('#new_pwd').val() !== $('#confirm_pwd').val()){
        $('.txt_notmatch_pwd').show();
        return false;        
    }
    var pwdChk =  chkPW('#new_pwd'); 
    if (pwdChk) {$('.chg_password_result').hide();};
})

/* 회원가입 */
// 아이디와 비번이 맞지않습니다. 팝업에서 회원가입 링크 클릭
$('#btn_link_reg').on('click', function() {
    $(this).closest('.wrap_pop').hide();
    $('.country').show();
})
// 로그인 화면에서 클릭
$('.btn_reg').on('click', function(){
    $('.country').show();
})
// 국가설정 다음버튼
$('#btn_country').on('click', function(){
    $(this).closest('.cont').next().show().end().hide();
});


/* 약관동의 */
// 약관동의 - 전체동의 해제되어있을때는 모두 체크, 체크되어있을땐 해제.
$('.all_agree input, .all_agree label').on('click', function(){
    if($('#allagree').is(":checked")) {
        $(".box_doc input").prop("checked", true);        
    } else {
        $(".box_doc input").prop("checked", false);
    }
});


/* 인증번호 전송 버튼 클릭시 */
$('.btn_certifi_send').on('click', function(){
    /* 값검증 */
    var certi1 = certiChkfun('#certi1', regExp, regExpMsg)
    /* 값검증이 통과되었다면 인증번호 타이머 시작 및 인증번호 발송 */
    if (certi1) {
        // 인증 번호 전송이 1번 이상 클릭되지 않도록 disable 시킴. 인증시간이 지나면 다시 클릭 가능.
        // disable 된게 아니면 타이머 작동해라.
        if (!$(this).hasClass('dis_certi')) {
            certiTimer("timer_certi2");
        }   
        // 타이머가 작동되면 disable 시킴.
        $(this).addClass('dis_certi');
    }
});

/* 인증 버튼 클릭시 */
$('.btn_certifi').on('click', function(){
    /* 인증 번호 값검증 */
    certiChkfun('#certi1', regExp, regExpMsg)
});

// 약관동의, 정보입력 페이지에서 회원가입 버튼클릭시
$('#btn_user_reg').on('click', function(){
    /* 약관동의에 체크가 되어있지 않고 회원가입 버튼 클릭시 */
    if ($('.box_doc input:checked').length != $('.box_doc input').length) {
        alert('모든 약관에 동의하셔야합니다.');
        return false;
    }    
    // 정보입력란에 입력안된 input 갯수 구하기. 
    var noneCertiInput = 0;    
    $('.user_reg .list_certi input').each(function(){if ($(this).val() == '') {noneCertiInput += 1;}});
    
    // 정보입려란에 입력안된 input이 0 이면 다음 단계로 넘어가고 그렇지 않다면, alert 
    if (noneCertiInput != 0) {
        alert('모든 정보입력란에 입력해주셔야합니다.');
        return false;
    } 

    // 연락처 정보 값검증
    var hpChk = certiChkfun('#certi1', regExp, regExpMsg);

    // 연락처 정보 값검증이 통과되었다면 인증번호 값검증.
    if (hpChk) {var certiNumChk =  certiChkfun('#certi2', regCertiNum, regCertiNumMsg)}

   // 연락처 정보 값검증이 통과되었다면 아이디 값검증
   if (certiNumChk) {var IdChk =  certiChkfun('#email', regEmail, regEmailMsg)}

    // 아이디 값검증이 통과되었다면 패스워드 값검증
    if (IdChk) {var pwdChk =  chkPW('#write_password');}

    // 비밀번호 값검증이 통과되었다면 비밀번호과 비밀번호 값이 같은지 검증.
    if (pwdChk) {var matchChk = matchPwd('#write_password', '#confrim_password', '.txt_password_confirm');}

    // 비밀번호까지 같다면 다음 단계로 넘어간다.
    if (matchChk) {$(this).closest('.cont').next().show().end().hide();}
});

/* 회원가입 result 팝업 */
// 작품등록 다음에 등록하기 버튼
$('#btn_reg_next').on('click', function(){
    $(this).closest('.cont').hide();
});
// 작품등록 하기 버튼
$('#btn_reg_finish').on('click', function(){
     $(this).closest('.cont').next().show().addClass('on').end().hide();
});
// 작품등록하기팝업. 업로드 하지 않고 다음을 누르면 alert 으로 업로드 하라는 메세지 출력.
$('#btn_reg_work').on('click', function(){
    if (!($('.work_img').hasClass('imgon'))) {
        alert('회원님의 작품을 업로드 해 주세요.')
    } else {
        $(this).closest('.cont').next().show().end().hide();
    }
});
// 개인액자 + 특별관 전시권에서 추천 작품코드를 넣지 않았을때 다시 한번 물음.
$('#btn_exhibition').on('click', function(){
    if ($('#recommend_work_num').val() == '') {
        var notRecommend = confirm('추천 작품 코드 입력 없이 진행하시겠습니까?');
        if (notRecommend) {
             $(this).closest('.cont').next().show().end().hide();
        } 
    }
})

// 배송정보입력 팝업 - 결제 버튼 클릭시
$('#btn_shipping_info').on('click', function(){
    // 이름, 주소, 연락처를 넣지 않고 결제를 누르면 alert 
    if ($('.wrap_deliver .required input').val() == '') {
         alert('필수 항목은 반드시 입력하셔야 합니다.');
    } 
    // 이름 값 검증.
    var userNameChk = certiChkfun('#delivery_name', regName, regNameMsg);
    // 이름 값 검증이 통과되었다면 연락처가 형식에 맞는지 값검증.
    if (userNameChk) {
        var deliverHp = $('#delivery_tel1').val() + $('#delivery_tel2').val() + $('#delivery_tel3').val()
        var regChk = /^\d{3}-?\d{3,4}-?\d{4}$/;
        if( !regChk.test(deliverHp) ) {
            alert('연락처를 정확하게 입력해주세요.');
            return false;      
        } 
    };
   // 다음 단계로 넘어간다.
    $(this).closest('.cont').next().show().end().hide();
});
// 결제완료.
$('#btn_payment_complete').on('click', function(){
   $(this).closest('.cont').hide();
});

// 작풍등록할때 이미지 미리보기 함수.
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('.on .work_img').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}  
$(".upload_file").change(function(){
    readURL(this);
    $('.work_img').addClass('imgon');
    $('.on .txt_work_reg').hide();
});
/* 헤더 작품등록 버튼 */
$('.util .reg_work').on('click', function(){
    $('.wrap_pop.work_reg').addClass('on').show();
});
$('#btn_pop_work_reg').on('click', function(){
     $(this).closest('.wrap_pop').hide();
})

/* 마이페이지 */
$('.reg_profile').on('click', function(){
    $('.wrap_kk_main').addClass('wrapMypage');
    $('.mypage, .mask').show();
    $('.mypage').addClass('on');
})

$('.mypage .chg_pwd').on('click', function(){
    $('.chg_password_result').show();
})
$('.mypage .btn_close').on('click', function(){
    $('.wrap_kk_main').removeClass('wrapMypage');
    $('.mypage, .mask').hide();
    $('.mypage').removeClass('on');
})


/* 약관 동의 팍업 - 전자상거래이용약관, 개인정보 수집 및 이용 동의, 취소 및 환불규정 */
$(document).on('click', '.btn_yakwan1', function(){
     $('#pop_yakwan').load('yakwan_pop.php')
});
    $(document).on('click', '.btn_yakwan2', function(){
     $('#pop_yakwan').load('yakwan_pop2.php')
});

$(document).on('click', '.btn_yakwan3', function(){
     $('#pop_yakwan').load('yakwan_pop3.php')
});
$(document).on('click', '.pop_cms .btn_close', function() {
    $('#pop_yakwan').empty();
});
