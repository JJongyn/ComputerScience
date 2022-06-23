window.addEventListener('load', async () => { 
	// 'load' : 페이지를 비롯한 이미지 등의 자원 전부가 모두 불러와졌을 때 winodw 객체에서 실행
	// async() : 비동기 처리

	// set the provider you want from Web3.providers
	web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:8545"));
	console.log('using web3 provider');

	const accounts = await web3.eth.getAccounts();
	web3.eth.defaultAccount = accounts[0];
	var balance = web3.eth.getBalance(accounts[0]);
	console.log('Set the default account: ', accounts[0]);
	console.log('Default Account Balance : ', balance);

	var StudentABI = [
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "fname",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "lname",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "bob",
					"type": "string"
				}
			],
			"name": "Added",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "fname",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "lname",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "dob",
					"type": "string"
				}
			],
			"name": "setStudent",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getStudent",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	];
	console.log('1');
	
	//StudentDetails = new web3.eth.Contract(StudentABI, '0xbf8ff36b51c077a044669c3e1c947664807252f1');
	StudentDetails = new web3.eth.Contract(StudentABI, '0x58d02dBe0F4cB9057A7B29f2e0A76D02c5781abc'); // Set your Contract address

	StudentDetails.events.Added({}, function(error, event) {
		if(!error) {
			refresh();
		}
		else{
			console.log(error);
		}

	});

	// 과거의 event 불러오기
	StudentDetails.getPastEvents('Added', {fromBlock:5, toBlock:'latest'},
		function(error, events){
			if(!error){
				events.forEach(event => console.log(event.returnValues));
			}
			else{
				console.log(error);
			}
		}
	);

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

