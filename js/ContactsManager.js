class ContactsManager {

	constructor(contactsList = []){
		this.contactsList = contactsList;
	}
	// Create menu for Contacts Manager
	menu(){
		console.log("Bienvenue dans notre gestionnaire de contact");
		let continueManager = true;
		do {
			let choice = prompt(`Voulez vous:\n1- Voir la liste des contacts \n2- Ajouter un contact \n3- Modifier un contact \n4- Supprimer un contact \n0- Quitter le programme`);
			switch (parseInt(choice)) {
				case 0 :
					continueManager = false
					break;
				case 1 :
					console.log("Liste des contacts");
					this.listContacts();
					break;
				case 2 :
					console.log("Ajouter Contact");
					this.addContact();
					break;
				case 3 :
					console.log("Modifier Contact");
					break;
				case 4 :
					console.log("Supprimer Contact");
					this.deleteContact();
					break;
				default :
					break;

			}
		}while(continueManager)
		console.log("Merci d'avoir utilisé notre gestionnaire de contacts")

	}

	/*
	 * Adding CRUD to Program in order to manage Contacts
	 */
	addContact(){
		console.log("Veuillez entrer un nouveau Contact")
		var contact = new Contact()
		this.contactsList.push(contact);
		console.log("Ce contact a été ajouté au gestionnaire")
		this.listContacts()

	}

	updateContact(){
		//choisir un contact

		/*
			proposer à l'utilisateur de modifier une donnée :
			1 - Modifier le nom
			2 - Modifier le prénom
			3 - Modifier l'email
			4 - Modifier le nom, le prénom et l'email
			0 - Revenir au menur principal
		 */

		//Appeler la fonction de modification de la donnée en fonction du choix utilisateur
		// utiliser le switch
		
	}

	deleteContact(){
		let deleteContact = true;
		do {
			let choice = this.selectContact("supprimer")
			if (choice <= this.contactsList.length && choice > 0){
				this.contactsList.splice(choice - 1, 1);
				console.log("Le contact a été supprimé");
				deleteContact = false;
			}else if(choice === 0){
				console.log("Retour au menu principal")
				deleteContact = false
			}else{
				console.error("Une erreur s'est produite. Vous avez saisi: " + choice );
				console.error("Veuillez choisir un nombre entre 1 et " + this.contactsList.length + " | 0 pour annuler");
			}
		}while(deleteContact);

	}

	listContacts(){
		console.log("Voici la liste de vos contacts")
		console.log("==============================")
		for(let i = 0 ; i < this.contactsList.length; i++){
			console.log(`${i + 1} - ${this.contactsList[i].getAllInformations()}`)
		}
	}

	selectContact(motive){
		this.listContacts();
		let choice = prompt(`Sélectionnez le contact à ${motive} dans la liste`);
		return parseInt(choice);
	}


}
