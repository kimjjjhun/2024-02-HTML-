// 구조 분해 할당.

let arr = [10,20,30]           // let arr 배열에 10 , 20 , 30 값을 저장

let a = arr[0];
let b = arr[1];
let c = arr[2];
console.log(a,b,c,);

let [d,e,f] = arr;             // arr에 저장했던 초기배열값 10 20 30 이 각각 d,e,f에 저장된다
                               // 이것을 구조적 분해할당이라고 한다.
console.log(d,e,f);

function test(narr){
    console.log(narr[0],narr[1],narr[2]); // arr에 저장했던 초기배열값 10 20 30 저장된다
}                                        // 이것을 구조적 분해할당이라고 한다.
test(arr);

function test2(a,b,c){
    console.log("test2 >>" ,a,b,c)
}
test(arr);
test2(arr);