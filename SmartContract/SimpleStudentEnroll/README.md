# index.html
* cdn 버전으로 web3.js 라이브러리를 포함

# main.js
* http에서 동작하는 node에 연결하기 위해서는 HttpProvider 함수를 통해 web3 객체를 생성해야 함.
    - local : 'http://127.0.0.1:8545/'
    - rospten : 'https://ropsten.infura.io' or 'https://api.myetherapi.com/rop'
    - mainnet : 'https://mainnet.infura.io' or 'https://api.myetherapi.com/eht'

* 스마트 컨트랙트 코드 호출
    - web3.eth.contract(My ABI_CODE).at(My Contract Address)함수로 호출 가능
    - ABI : Solidity Compile Detail에서 코드의 ABI 받을 수 있음
    - web3.eth.Contract에서 두 번째 인자로 Smart Contract Address 불러올 때 자신이 Deploy 한 Address의 주소로 매번 변경해야 함.
    -> Solidity에서 선언한 함수들을 사용 가능

* call(), send()
    - 스마트 컨트랙트의 상태를 변경(데이터 변경) -> send()
    - 스마트 컨트랙트의 상태를 변경 X -> call()
    
* call(error, result)
    - 이 콜백은 스마트 계약 메서드 실행 결과를 두 번째 인수로 사용하거나 오류 개체를 첫 번째 인수로 사용함
    - https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html?highlight=transactionHash#id36 참고

* main.js에서 contract의 Setstudent 메소드 실행시 out of gas에러 발생
    - send 함수에서 gas limit '1000000' 설정

