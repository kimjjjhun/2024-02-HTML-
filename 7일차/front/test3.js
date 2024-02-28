// 스프레드 연산자 ...... es6

let arr = [10,20,30]

let nArr = [...arr,40,50,60]    // arr 초기값 10,20,30 을 ...arr 사용하여
                                // nArr 에 저장할수있다.

console.log(nArr);

function func(...rest){       // rest 하나가 모든배열의 값을 받아준다. 즉
    console.log(rest)         // rest[10,20,30,40,50,60] 이 된다.
}
func(1,2,3,4,5,)

function func2(a,...aaa){     // a, 가 배열 0번째의 값을 저장 받는다.
    console.log(a);           // aaa 가 나머지 배열의 값을 저장 받는다.
    console.log(aaa);
}
func(1,2,3,4,5)

