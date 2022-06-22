window.addEventListener('load', async () => { 
	// 'load' : 페이지를 비롯한 이미지 등의 자원 전부가 모두 불러와졌을 때 winodw 객체에서 실행
	// async() : 비동기 처리

	// set the provider you want from Web3.providers
	web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
	console.log('using web3 provider');

	const accounts = await web3.eth.getAccounts();
	web3.eth.defaultAccount = accounts[0];
	var balance = web3.eth.getBalance(accounts[0]);
	console.log('Set the default account: ', accounts[0]);
	console.log('Default Account Balance : ', balance);

	var StudentABI = [
			{
				"constant": false,
				"inputs": [
					{
						"name": "fname",
						"type": "string"
					},
					{
						"name": "lname",
						"type": "string"
					},
					{
						"name": "dob",
						"type": "string"
					}
				],
				"name": "setStudent",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "getStudent",
				"outputs": [
					{
						"name": "",
						"type": "string"
					},
					{
						"name": "",
						"type": "string"
					},
					{
						"name": "",
						"type": "string"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			}
	];
	console.log('1');
	
	//StudentDetails = new web3.eth.Contract(StudentABI, '0xbf8ff36b51c077a044669c3e1c947664807252f1');
	StudentDetails = new web3.eth.Contract(StudentABI, '0x184f164E15971Aa96517Ce610d052969F613178e'); // Set your Contract address

	refresh();
});

function refresh() {
    StudentDetails.methods.getStudent().call((error, result) => { 
		// call : getStudent 메소드가 컨트랙트에서 값의 변경이 없는 view이기 때문에 call 사용
		
        if (!error) {
            $("#instructor").html(
                'Enrolled ' + result[0] + ' ' + result[1] + ' with DOB ' + result[2]);
            console.log(result);
        } else {
            console.log(error);
        }
    });
}

function Update() {
	StudentDetails.methods.setStudent($("#fname").val(), $("#lname").val(), $("#dob").val())
	.send({from: web3.eth.defaultAccount, gas:'1000000'}, (error, transactionHash) => { // Set gas limit 
		if (!error) {
			console.log(transactionHash);
		} else {
			console.log(error);
		}
	});
}	

