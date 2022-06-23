# truffle 설정
truffle-config.js -> network 설정
truffle compile, truffle console(develop 환경 접속), truffle migrate(배포)

# truffle react box
```
truffle unbox react // react box 설치
truffle compile
truffle migrate
cd client 
npm run start
```

# Error
* truffle box 설정 후 compile, migrate 모두 에러뜨는 상황 발생
```
npm uninstall -g truffle
npm install -g truffle@5.4.22
```
* react-scripts 실행 에러
```
npm upgrade
```