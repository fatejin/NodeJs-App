f123();  //함수 호출
console.log('A');
console.log('B');
console.log('C');
f123();
console.log('D');
console.log('E');
console.log('C');

function f123() {  //함수 만들기
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4); // 유지보수 편함 로직을 추가함
}


//함수는 어떤 프로그램에 로직을 붙이고 가독성을 높인다.