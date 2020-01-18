class Contact {
	// TODO : When the program works, delete email parameter
	constructor(name = "", surname = "" , email = "unknown@unknown.fr"){
		this.name = name;
		this.surname = surname;
		this.email = email;
		if(!this.checkNameIsOk()){
			this.setName();
		}
		if(!this.validateEmail(this.email)){
			this.setEmail();
		}

	}

	checkNameIsOk(){
		return this.name.length >= 2;
	}

	setName(){
		let name = "";
		do {
			name = prompt("Please enter contact name");
		} while (name.length < 2);
		this.name = name;
		console.log(`Your contact name is ${this.name} ${this.surname}`);
	}
	setEmail(){
		do {
			this.email = prompt("Enter contact Email");
		} while (!this.validateEmail(this.email));
		console.log(`Your contact ${this.name} ${this.surname} email is: ${this.email}`);
	}
	// TODO : Set Phone Number

	getAllInformations(){
	 return `name: ${this.name} | surname: ${this.surname} | email: ${this.email}`;
	}

	validateEmail(email) {
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

}
