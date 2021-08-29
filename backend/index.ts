import express, { Request, Response } from "express";
import transactions from './routes/transactions';
import makefile from './routes/makefile';

const app = express();
const port = 3001;
const cors = require("cors");


// transaction crud opereations paths

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/transactions', transactions);
app.use('/makefile', makefile);

app.get(
	"/",
	async (req: Request, res: Response): Promise<Response> => {
		return res.status(200).send({
			message: "Capitolis Backend Live",
		});
	}
);

try {
	app.listen(port, (): void => {
		console.log(`Connected successfully on port ${port}`);
	});
} catch (error) {
	console.error(`Error occured: ${error.message}`);
}



