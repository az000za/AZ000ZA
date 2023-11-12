/*
	The database will consist of 3 data models

	account_organization
		id_account_organization
		organization name
		organization owner
		createdAt
				
	account_user
		id__account_organization
		id_account_user
		email
		usernname
		password
		loggedin
		createtAt

	account_gendata
		id_account_gendata
		id_account_organization
		id_account_user
		createdAt
		props = [
			"N1prop",
			"N1value",
			"N2prop",
			"N2value",
		]
		
	
	prefixed records
		"notifications",
		"convohist",
		"workers",
		"file",
		"workflow",
		"assistant",
		"ppl",
		"assistant"	
*/