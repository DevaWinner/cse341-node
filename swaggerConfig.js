const swaggerJsdoc = require("swagger-jsdoc");

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Contacts API",
			version: "1.0.0",
			description: "API for managing contacts",
		},
		servers: [
			{
				url: "https://cse341-node-9dp6.onrender.com",
			},
		],
		components: {
			schemas: {
				Contact: {
					type: "object",
					properties: {
						_id: {
							type: "string",
							description: "Auto-generated ID of the contact",
						},
						firstName: {
							type: "string",
							description: "First name",
						},
						lastName: {
							type: "string",
							description: "Last name",
						},
						email: {
							type: "string",
							description: "Email address",
						},
						favoriteColor: {
							type: "string",
							description: "Favorite color",
						},
						birthday: {
							type: "string",
							format: "date",
							description: "Birthday",
						},
					},
				},
				ContactInput: {
					type: "object",
					required: [
						"firstName",
						"lastName",
						"email",
						"favoriteColor",
						"birthday",
					],
					properties: {
						firstName: {
							type: "string",
							description: "First name",
						},
						lastName: {
							type: "string",
							description: "Last name",
						},
						email: {
							type: "string",
							description: "Email address",
						},
						favoriteColor: {
							type: "string",
							description: "Favorite color",
						},
						birthday: {
							type: "string",
							format: "date",
							description: "Birthday",
						},
					},
				},
				ContactResponse: {
					type: "object",
					properties: {
						message: {
							type: "string",
						},
						id: {
							type: "string",
						},
					},
				},
			},
		},
	},
	apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
