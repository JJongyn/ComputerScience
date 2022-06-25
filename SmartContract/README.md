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
# truffle drizzle
```
truffle init
create-react-app client
cd client
npm install
npm run start
npm install --save drizzle drizzle-react
```
# (추가) change node.js version
* node.js version 변경하기 
    - nvm list available
    - nvm install 원하는 버전
    - nvm list로 사용 가능 버전 확인 (*:현재 사용중인 버전)
    - nvm use 사용 가능 버전
    
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