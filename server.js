const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const { initializeDatabase } = require("./data/database");
const contactsRoutes = require("./routes/contacts");
const indexRoutes = require("./routes/index");

// Parse JSON data
app.use(express.json());

// Routes
app.use("/contacts", contactsRoutes);
app.use("/", indexRoutes);

// Handle unhandled promises
process.on("unhandledRejection", (error) => {
	console.error("Unhandled Rejection:", error);
});

// Initialize the database and start the server
initializeDatabase()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.error("Database initialization failed:", error);
		process.exit(1);
	});
