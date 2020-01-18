class ContactsManager {

	constructor(contactsList = []){
		this.contactsList = contactsList;
	}
	// Create menu for Contacts Manager
	menu(){
		console.log("Welcome to our contact manager");
		let continueManager = true;
		do {
			let choice = prompt(`Do you want to:\n1- See Contacts List \n2- Add a contact \n3- Modify a contact \n4- Delete a contact \n0- Leave the program`);
			switch (parseInt(choice)) {
				case 0 :
					continueManager = false;
					break;
				case 1 :
					console.log("Contacts List");
					this.listContacts();
					break;
				case 2 :
					console.log("Add Contact");
					this.addContact();
					break;
				case 3 :
					console.log("Modify Contact");
					this.updateContact();
					break;
				case 4 :
					console.log("Delete Contact");
					this.deleteContact();
					break;
				default :
					break;

			}
		}while(continueManager);
		console.log("Thanks to use our Contacts Manager")

	}

	/*
	 * Adding CRUD to Program in order to manage Contacts
	 */
	addContact(){
		console.log("Please enter a new contact");
		let contact = new Contact();
		this.contactsList.push(contact);
		console.log("This contact has been added");
		this.listContacts();
	}

	updateContact(){
		console.log("todo");
		//Choose a contact

		/*
			Ask the user to alter a data:
			1 - Modify Name
			2 - Modify Surname
			3 - Modify Email
			4 - Modify Name, Surname and email
			0 - Back to the main menu
		 */

		// Call the method asked by user
		// use switch

	}

	deleteContact(){
		let deleteContact = true;
		do {
			let choice = this.selectContact("delete");
			if (choice <= this.contactsList.length && choice > 0){
				this.contactsList.splice(choice - 1, 1);
				console.log("Contact has been deleted");
				deleteContact = false;
			}else if(choice === 0){
				console.log("Back to the main menu");
				deleteContact = false
			}else{
				console.error(`An error occured you choosed: ${choice}` );
				console.error(`Please choose a number between 1 and ${this.contactsList.length} | 0 to cancel`);
			}
		}while(deleteContact);

	}

	listContacts(){
		console.log("This is your contacts list");
		console.log("==============================");
		let index = 1;
		this.contactsList.forEach(contact => {
			console.log(`${index} - ${contact.getAllInformations()}`);
			index++
		});
		for(let i = 0 ; i < this.contactsList.length; i++){

		}
	}

	selectContact(motive){
		this.listContacts();
		let choice = prompt(`Select the contact to ${motive} in the list`);
		return parseInt(choice);
	}


}
