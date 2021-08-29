import express from "express";
import transactions from './routes/transactions';
import makefile from './routes/makefile';
import { createTransactionTable } from "./controllers/postgres_controller";

const app = express();
const port = 3001;
const cors = require("cors");



// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', createTransactionTable); 

app.use('/transactions', transactions);
app.use('/makefile', makefile);

app.get(
	"/",
	async (req, res) => {
		return res.status(200).send({
			message: "Capitolis Backend Live",
		});
	}
);

try {
	app.listen(port, () => {
		console.log(`Connected successfully on port ${port}`);
	});
} catch (error) {
	console.error(`Error occured: ${error.message}`);
}



