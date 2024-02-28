/*let studentScore = {                                                 // let 은 자료형을 받아줄수있는 js 의 자료형이다. (b,s,i,l,short,double,boolean...)
    koreaScore : 90,                                                   // koreaScore : 90 은 int koreaScroe; 에 90의 값을 넣은것과 같다.
    englishScore : 80,                                                 // studentScore에 let으로 받을자료형을 정하고 80의 값을 입력
    mathScore : 99                                                     // mathScore에 let으로 받을자료형을 정하고 99의 값을 입력
}
console.log(studentScore.koreaScore);                                  // console.log 는 js에서 이클립스와같이 sysout 으로 출력을 해준다.
console.log(studentScore.englishScore);                                // console.log 는 js에서 이클립스와같이 sysout 으로 출력을 해준다.
console.log(studentScore.mathScore);                                   // console.log 는 js에서 이클립스와같이 sysout 으로 출력을 해준다.
console.log(studentScore['englishScore']);                             // console.log 는 js에서 이클립스와같이 sysout 으로 출력을 해준다.

let a = 10;                                                            // a 변수명에 자료형 let 으로 10값을 입력
let b = 10;                                                            // b 변수명에 자료형 let 으로 10값을 입력

 console.log(typeof a);                                                // 정수형일경우 number 를 출력 , 문자열일경우 String 을 출력
console.log(typeof b);                                                 // 정수형일경우 number 를 출력 , 문자열일경우 String 을 출력
console.log(a == b);                                                   // 논리형으로 참일경우 ture 값 출력    java의 &&과 같음
console.log(a === b);                                                  // 논리형으로 참이경우 false 값을 출력  java의 != 조건문 부정과 같음

console.log(String(a)+b);                                              // 정수를 문자열로 변환해 a+b 값 즉 '1010' 이 출력 앞에 10은 문자열 뒤에 10은 정수형이다.
console.log(a+Number(b)); */                                           // 정수형 a와 b를 정수형으로 변환해서 합산한 값을 반환한다. 즉 값은 '20'이 된다.

let c = [10, 20, 30, 40, "kor", "eng"];                                // js의 자료형 let c에 10,20,30,40,kor,eng 값을 입력

// console.log(c);                                                     // let c에 저장되있는 10,20,30,40,kor,eng 모두 출력된다.

// for(let a in c)                                                     // let c의 배열의 길이를 알려준다.
// console.log(a);

let d = {                                                              // let d 에 a는 10 b는 20 c는 30 값을 입력
    a: 10,
    b: 20,
    c: 30
};
// for(let a in d)                                                     // js에서 향상된 for문을 통해서 배열의 길이만큼 반복한다는 문장
// console.log(d[b]) = 20                                              // let b 를 배열 let d의 길이만큼 반복하여 출력   let d의 길이는 0 1 2  이기에 10 20 30 을 반복하여 출력  
// console.log(d[c]) = 30                                              // let c 를 배열 let d의 길이만큼 반복하여 출력   let d의 길이는 0 1 2  이기에 10 20 30 을 반복하여 출력
// console.log(d[a]) = 10                                              // let a 를 배열 let d의 길이만큼 반복하여 출력   let d의 길이는 0 1 2  이기에 10 20 30 을 반복하여 출력
// for(let a in d)                                                     // let a 를 let d 의 배열길이만큼 반복
// console.log(d.a);                                                   // let d 의 a 를 3번반복

function fun1(n) {                                                     // fun1에 매개변수 n을 주고 
    // console.log("------------------")                               // 콘솔로그로 ----- 출력
    for (i = 0; i < n; i++)                                            // for문을 사용하여 n값보다 클때까지 반복문 실행
        console.log(i);
}
//fun1(3);                                                             // fun1(n) 매개변수 n값에 3을 넣었기에 3보다 클때까지 반복문을 실행 값은 0 1 2 가 출력된다.

let funct = function fun2(n) {                                         // fun2(n) fun2의 매개변수 n
    for (let i = 0; i < n; i++)                                        // for문을 사용하여 i값이 n값보다 커질때까지 반복
        console.log(i * 2);                                            // 증가한 i값을 *2를 하여 출력
}
//funct(3);                                                            // let 변수 funct 에 초기값 3을 입력
 
let funct2 = function (n) {   // 익명함수
    let sum = 0;                                                       //  let sum 에 초기값 0 입력
    for (let i = 1; i < n; i++)                                        // 반복문을 통해 n값보다 커질때까지 반복
        sum += i;                                                      // sum+= i 로 통해 증가한 i값을 sum값에 입력
    return sum;                                                        // 값을 받은 sum을 위에 초기값으로 리턴시킴
}
let total = funct2(5);                                                 // total 변수에 자료형 let funct2(5) 값 입력
// console.log("합 : " + total);

/* let funct3 = (n) => { //화살표함수                                   
    let sum = 0;
    for (let i = 1; i <=n; i++)
        sum += i;
    return sum;
}
let sum = funct3(100);
// console.log(sum)

let f = () => console.log("----------------") // 인자값없을경우 ()빈괄호 넣으면된다.
f();

let f2 = () =>
    console.log("-------------");  //값이 한개 일경우 중괄호를 생략할수있다.
f2();    // 호출함수
*/



function sum(a,b){                                   // 즉시호출함수 (){}//
    console.log(a+b)          /* sum안에 function sum(a,b){console.log(a+b)}를넣 */
}                             /* 는다 */ 
sum(10,20);

// 객체생성 //
const person = {                   // const 는 let처럼 js에서 자료형을 받을수있다.
    name : {firstName:"길동",lastName:"홍"}, // {} 중괄호에 이름을 나눠서 저장할수있다.
    age : 29,
    address : "경기도"
};
console.log(person.name.firstName);
console.log(person.name['firstName']);

// 객체 속성추가,변경 //

person.gender = "남";        // person 끝에 gender 가 추가된다.
person.age = 59              // 값을 받고있는 변수를 입력하고 변경하면 덮어씌운다.
person.name.lastName="김";   // name에 lastName을 넣고 값을 변경할수있다.
delete person.gender;        // 추가된 gender를 delete를 통해서 삭제시킨다.
console.log(person)          

/* person = {
    age : 20       person이 참조하는 age는 가능하지만 새로운 참조변수에 값을넣는건
} */                      // 불가능하다.

let test = [10,20,30,40,50]
console.log(test);

test.unshift(60);          // unshift 배열의 맨앞에 배열을 추가한다.
console.log(test);

test.shift();              // shift 맨 앞의 데이터를 추출 즉 사라집니다.
console.log(test);      

