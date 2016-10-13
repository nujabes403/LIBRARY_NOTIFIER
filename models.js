module.exports = (function(){
    const LL_1 = { id : 'LL_1', name : "법학- 제1열람실 3층", link:"https://crossorigin.me/http://166.104.182.141/seatl/roomview5.asp?room_no=1"};
    const LL_2 = { id : 'LL_2', name : "법학- 제2열람실A 4층", link:"https://crossorigin.me/http://166.104.182.141/seatl/roomview5.asp?room_no=2"};
    const LL_3 = { id : 'LL_3', name : "법학- 제2열람실B 4층", link:"https://crossorigin.me/http://166.104.182.141/seatl/roomview5.asp?room_no=3"};
    const LL_4 = { id : 'LL_4', name : "법학- 대학원열람실 2층", link:"https://crossorigin.me/http://166.104.182.141/seatl/roomview5.asp?room_no=4"};
    const CL_01U = { id : 'CL_01U', name : "백남- 제1열람실상 (지하1층)", link:"https://crossorigin.me/http://166.104.182.141/seats/roomview5.asp?room_no=7"};
    const CL_01D = { id : 'CL_01D', name : "백남- 제1열람실하 (지하1층)", link:"https://crossorigin.me/http://166.104.182.141/seats/roomview5.asp?room_no=8"};
    const CL_1 = { id : 'CL_1', name : "백남- 제2열람실우 (지하1층)", link:"https://crossorigin.me/http://166.104.182.141/seats/roomview5.asp?room_no=10"};
    const CL_2 = { id : 'CL_2', name : "백남- 제2열람실좌 (지하1층)", link:"https://crossorigin.me/http://166.104.182.141/seats/roomview5.asp?room_no=9"};
    const CL_3 = { id : 'CL_3', name : "백남- 제3열람실상 (3층)", link:"https://crossorigin.me/http://166.104.182.141/seats/roomview5.asp?room_no=5"};
    const CL_4 = { id : 'CL_4', name : "백남- 제4열람실상 (3층)", link:"https://crossorigin.me/http://166.104.182.141/seats/roomview5.asp?room_no=11"};
    var Libraries = [LL_1, LL_2, LL_3, LL_4, CL_01U, CL_01D, CL_1, CL_2, CL_3, CL_4];

    return {
        GetLibraries:function() {
            return Libraries;
        }
    }
}());
