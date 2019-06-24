class Contact {
	// TODO : When the program works, delete email parameter
	constructor(name = "", surname = "" , email = "unknown@unknown.fr"){
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.phone = "";
		if(!this.checkNameIsOk()){
			this.setName();
		}
		if(!this.validateEmail(this.email)){
			this.setEmail();
		}

	}

	checkNameIsOk(){
		if(this.name.length < 2){
			return false;
		}
		return true;
	}

	setName(){
		let name = "";
		do {
			name = prompt("Entrez le nom du contact");
		} while (name.length < 2)
		this.name = name;
		console.log(`Votre contact s'appelle ${this.name} ${this.surname}`);
	}
	setEmail(){
		do {
			this.email = prompt("Entrez le email du contact")
		} while (!this.validateEmail(this.email))
		console.log(`Votre contact ${this.name} ${this.surname} a pour email: ${this.email}`)
	}
	// TODO : Set Phone Number

	getAllInformations(){
	 return `nom: ${this.name} | prenom: ${this.surname} | email: ${this.email}`;
	}

	validateEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

}
