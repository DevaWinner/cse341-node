const { getDatabase } = require("../data/database");
const { ObjectId } = require("mongodb");

// To get all contacts
const getAllContacts = async (request, response) => {
	try {
		const db = getDatabase();
		const contacts = await db.collection("contacts").find({}).toArray();
		response.json(contacts);
	} catch (error) {
		console.error("Error fetching contacts:", error);
		response.status(500).json({ error: "Failed to fetch contacts" });
	}
};

// To get a single contact by ID
const getContactById = async (request, response) => {
	try {
		const db = getDatabase();
		const id = String(request.params.id);

		// Check if the ID is a valid ObjectId
		if (!ObjectId.isValid(id)) {
			return response.status(400).json({ error: "Invalid ID format" });
		}

		const contact = await db
			.collection("contacts")
			.findOne({ _id: new ObjectId(id) });

		if (!contact) {
			return response.status(404).json({ error: "Contact not found" });
		}

		response.json(contact);
	} catch (error) {
		console.error("Error fetching contact by ID:", error);
		response.status(500).json({ error: "Failed to fetch contact" });
	}
};

module.exports = {
	getAllContacts,
	getContactById,
};
