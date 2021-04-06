/* 추후 글로벌 셋팅 */
i18next.init({
	        lng: 'ko',
	        resources: {
			  ko: {translation: { 
				  workCode: {  txt1: '작품코드' },
				  login: {txt1:'자동로그인',txt2:'로그인', txt3:'계정찾기', txt4:'비밀번호찾기', txt5:'회원가입'},
				  placeholder : {txt1:'이메일',txt2:'비밀번호'}
			  }},
	          en: {translation: { 
				  workCode: { txt1: 'WORK NUMBER'},
				  login: {txt1:'Autologin',txt2:'LOGIN', txt3:'Join', txt4:'Find Account', txt5:'Find Password'},
				  placeholder : {txt1:'E-MAIL',txt2:'PASSWORD'}
			  }},
	        }
	      }, function(err, t) {jqueryI18next.init(i18next, $, { i18nName: 'i18next'});
	        $('body').localize();
});