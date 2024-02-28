// 콜백함수

let f = function(){
    console.log("1번");
}
setTimeout(
    f, 3000                            // 1000은 1초 , 즉 3초 후에 아래 
);                                  //"-----------" 문장을 실행시킨다.
                                    // 그리고 f 함수를 호출한다. 즉 "1번" 문구가 출력된다.
console.log("-------------");

function double(num){
    setTimeout(
        function(){
            const doubleNum = num*2;
            console.log(doubleNum);
        } , 1000
    );
};
double(10);

function fetchData(callback){
    setTimeout(function(){
        const data = "여기 데이타";
        callback(data);
    }) , 1000 ;
}
fetchData(function(data){
    console.log("데이타 도착 >> " + data);
});

fetchData(function(data){
    console.log("새로운 데이타 >> " + data);
});