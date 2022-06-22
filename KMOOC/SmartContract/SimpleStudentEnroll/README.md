* web3.eth.Contract에서 두 번째 인자로 Smart Contract Address 불러올 때 자신이 Deploy 한 Address의 주소로 매번 변경해야 함.

* main.js에서 contract의 Setstudent 메소드 실행시 out of gas에러 발생
    - send 함수에서 gas limit '1000000' 설정

