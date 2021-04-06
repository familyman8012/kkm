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
    <div class="mask"></div>
    <div class="wrap_cont_admin">
        <div class="wrap_user_manage">
            <h2>회원관리</h2>
            <span class="btn_point">포인트 지급</span>
        </div>
        <div class="view_state_users">
            <p class="total_number">
                <span class="txt">총 회원 수 :</span>
                <span class="num">6,785</span>
            </p>
            <ul class="list_type">
                <li class="gold">
                    <span class="tit">골드액자 수</span>
                    <span class="num">690</span>
                </li>
                <li class="silver">
                    <span class="tit">실버액자 수</span>
                    <span class="num">900</span>
                </li>
                <li class="bronze">
                    <span class="tit">브론즈액자 수</span>
                    <span class="num">1800</span>
                </li>
                <li class="nohave">
                    <span class="tit">무액자 수</span>
                    <span class="num">4,088</span>
                </li>
                <li class="leav">
                    <span class="tit">탈퇴 회원 수</span>
                    <span class="num">51</span>
                </li>
            </ul>
            <div class="wrap_search_control"> 
                <ul class="list">
                    <li>전체</li>
                    <li>골드</li>
                    <li>실버</li>
                    <li>브론즈</li>
                    <li>무료</li>
                </ul>
                <div class="box_inp">
                    <select>
                        <option>회원번호</option>
                        <option>계정</option>
                        <option>등록</option>
                    </select>
                    <span class="wrap_inp_search">
                        <input type="text" name="inp_search" id="inp_search" />
                        <span class="btn"><i class="blind">검색</i></span>
                    </span>
                </div>
            </div>
            <div class="boad_search">
                <table class="tbl_search">
                    <caption>회원번호, 계정, 액자, 가입일, 상세정보에 대한 리스트입니다.</caption>
                    <thead>
                        <tr>
                            <th scope="col">회원번호</th>
                            <th scope="col">계정</th>
                            <th scope="col">액자</th>
                            <th scope="col">가입일</th>
                            <th scope="col">관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>15621</td>
                            <td>kyh817000@gmail.com</td>
                            <td>
                                <ul class="list">
                                    <li class="gold">1</li>
                                    <li class="silver">0</li>
                                    <li class="bronze">1</li>
                                </ul>
                            </td>
                            <td>2020-02-03</td>
                            <td>
                                <span class="btn">보기</span>
                            </td>
                        </tr>
                        <tr>
                            <td>15621</td>
                            <td>kyh817000@gmail.com</td>
                            <td>
                                <ul class="list">
                                    <li class="gold">1</li>
                                    <li class="silver">0</li>
                                    <li class="bronze">1</li>
                                </ul>
                            </td>
                            <td>2020-02-03</td>
                            <td>
                                <span class="btn">보기</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="paging">
                    <span>prev</span>
                        <ul class="list">
                            <li class="on">1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    <span>next</span>
                </div>
            </div>
        </div>
    </div>
    <div class="pop_give_point">
        <h2>포인트 지급</h2>
        <span class="btn_close"><i class="blind">닫기</i></span>
        <dl>
            <dt><label for="inp_point_id">아이디</label></dt>
            <dd><input type="text" id="inp_point_id" name="inp_point_id" value="" /></dd>
        </dl>
        <dl>
            <dt><label for="inp_give_point">포인트</label></dt>
            <dd><input type="text" id="inp_give_point" name="inp_give_point" value=""></dd>
        </dl>
        <dl>
            <dt><label for="inp_write_desc">사유</label></dt>
            <dd><textarea id="inp_write_desc" name="inp_write_desc"></textarea></dd>
        </dl>
        <span class="btn_give_point">지급</span>
    </div>
     <script src="./js/admin.js"></script>
</body>
</html>