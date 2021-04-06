<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <link rel="stylesheet" href="./css/common.css">
    <link rel="stylesheet" href="./css/admin.css">
</head>
<body>
    <div class="wrap_cont_adminView">
        <h2>회원정보</h2>
        <table class="tbl_sty1">        
            <tbody>
                <tr>
                    <th scope="row">회원번호</th>
                    <td>16541</td>
                    <th scope="row">가입일</th>
                    <td>2019-12-25</td>
                </tr>
                <tr>
                    <th scope="row">계정</th>
                    <td>kyh817000@gmail.com</td>
                    <th scope="row">연락처</th>
                    <td>010-5678-0000</td>
                </tr>
                <tr>
                    <th scope="row">구매액자</th>
                    <td>KKM-G100 <span class="date">2021-01-01</span></td>
                    <th scope="row">특별관</th>
                    <td>전시 중 <span class="date">2021-01-01</span></td>
                </tr>
                <tr>
                    <th scope="row">추천 작품 코드</th>
                    <td>KKM-G2</td>
                    <th scope="row">회원상태</th>
                    <td>일반회원</td>
                </tr>
            </tbody>
        </table>
        <div class="wrap_have_frame">
            <div class="box_tit">
                <h2>보유액자</h2>
                <ul class="list">
                    <li class="gold">1</li>
                    <li class="silver">1</li>
                    <li class="bronze">1</li>
                </ul>
            </div>
            <table class="tbl_sty2">
                <thead>
                    <tr>
                        <th>작품코드</th>
                        <th>등록날짜</th>
                        <th>액자등급</th>
                        <th>구입처</th>
                        <th>판매</th>
                    </tr>            
                </thead>
                <tbody>
                    <tr>
                        <td>KKM-G120321d</td>
                        <td>2021-01-01</td>
                        <td>골드</td>
                        <td>뮤지엄</td>
                        <td>판매대기</td>
                    </tr>
                    <tr>
                        <td>KKM-S321534d</td>
                        <td>2021-01-01</td>
                        <td>실버</td>
                        <td>거래소</td>
                        <td>판매가능</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="recommend">
            <h2>추천인</h2>
            <table  class="tbl_sty2">
                <thead>
                    <tr>
                        <th>작품코드</th>
                        <th>추천날짜</th>
                        <th>추천인계정</th>
                        <th>액자등급</th>
                        <th>추천인 작품코드</th>
                    </tr>            
                </thead>
                <tbody>
                    <tr>
                        <td>KKM-G120321d</td>
                        <td>
                            2021-01-01<br />
                            2021-01-01<br />
                            2021-03-01<br />
                        </td>
                        <td>
                            likjh@gmail.com<br />
                            jfkdlsxj@mahki.com<br />                
                            hdjdjljk@mali.com<br />   
                        </td>
                        <td>
                            골드<br />
                            실버<br />
                            실버<br />
                        </td>
                        <td>
                            KKM-G5678<br />
                            KKM-S23456<br />
                            KKM-S23456<br />
                        </td>
                    </tr>
                    <tr>
                        <td>KKM-S321534d</td>
                        <td>2021-03-01</td>
                        <td>hkdjkcf@banmail.net</td>
                        <td>브론즈</td>
                        <td>브론즈</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="have_state">
            <h2>보유현황</h2>
            <div class="point">
                <span class="tit">총 포인트</span>
                <span class="view_point"><span class="num">420,000</span>P</span>
                <span class="btn">포인트 지급</span>
            </div>
            <div class="point lst">
                <span class="tit support">후원 포인트</span>
                <span class="view_point support"><span class="num">420,000</span>P</span>
                <span class="tit recommend">추천 포인트</span>
                <span class="view_point recommend"><span class="num">120,000</span>P</span>
            </div>
        </div>
    </div>
</body>
</html>