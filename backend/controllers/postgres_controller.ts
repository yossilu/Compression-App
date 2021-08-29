//TODO print details about requests and responses
const pool = require("../database/db.js");

/* 
*
* Gets all records from party_transaction table.
*
*/
export const getAll = async (req: any, res: any) => {
    try {
        const allTransactions = await pool.query("SELECT * FROM party_transactions")
        res.json(allTransactions.rows);

    } catch (err) {

    }
}

export const getPaying = async (req: any, res: any) => {
    try {
        const payingTransactions = await pool.query("select * from public.party_transactions where amount < 0")
        res.json(payingTransactions.rows);

    } catch (err) {

    }
}

export const getReceiving = async (req: any, res: any) => {
    try {
        const receivingTransactions = await pool.query("select * from public.party_transactions where amount > 0")
        res.json(receivingTransactions.rows);

    } catch (err) {

    }
}
/* 
*
* adding a single record to party_transaction table.
*
*/
export const addOne = async (req: any, res: any) => {
    try {
        const { tradingparty, counterparty, amount } = req.body;
        const newTransaction = await pool.query(
            `INSERT INTO public.party_transactions (tradingparty, counterparty, amount) VALUES('"${tradingparty}"', '"${counterparty}"', ${amount})`,
        )
        res.json(newTransaction);

    } catch (err) {

    }
}