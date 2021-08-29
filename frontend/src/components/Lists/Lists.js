import React, { Fragment, useEffect, useState} from "react";
import useStyles from './styles';
import { AppBar, Typography } from '@material-ui/core'

const Lists = () => {
    const classes = useStyles();

    const [payingTransactions, setPayingTransactions] = useState([]);
    const [receivingTransactions, setReceivingTransactions] = useState([]);


    //possible dup, need to refactor.
    const getPayingTransactions = async () => {
        try{
            const response = await fetch("http://localhost:3001/transactions/getPaying");
            const jsonData = await response.json();
            setPayingTransactions(await jsonData);
        } catch (err) {
            console.log(err.message);
        }
    }

    const getReceivingTransactions = async () => {
        try{
            const response = await fetch("http://localhost:3001/transactions/getReceiving");
            const jsonData = await response.json();
            setReceivingTransactions(await jsonData);
        } catch (err) {
            console.log(err.message);
        }
    }

    //TODO can be done better.
    const compressTransactions = async () => {
        let compressedArr = [];
        receivingTransactions.map(rt => {
            payingTransactions.map(pt => {
                if(pt.tradingparty === rt.tradingparty && pt.counterparty === rt.counterparty){
                    let newAmount = pt.amount + rt.amount;
                    compressedArr.push({tradingparty: pt.tradingparty, counterparty: pt.counterparty, amount: newAmount})
                } else {
                    let adjustedAmount = pt.amount || pt.amount === 0 ? rt.amount : pt.amount;
                    compressedArr.push({tradingparty: pt.tradingparty, counterparty: pt.counterparty,  amount: adjustedAmount})
                }
            })
        })
        const response = await fetch("http://localhost:3001/makefile", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify(compressedArr)
            })
        if(response.status === 200){
            alert("File Saved Succesfully")
        }
        // return compressedArr;
    }

    useEffect(() => {
        getPayingTransactions();
        getReceivingTransactions();
    }, []);


    return <Fragment>
        <div className={classes.mainContainer}>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h5" align="center">Receiving Transactions</Typography>
            </AppBar>
            <div className={classes.table}>
                <div className={classes.header}>
                    <div className={classes.headers}>tradingParty</div>
                    <div className={classes.headers}>counterParty</div>
                    <div className={classes.headers}>Amount</div>
                </div>
                <div className={classes.body}>
                    {receivingTransactions.map((transaction, i) => { 
                        return <div key={i + transaction.tradingparty} className={classes.dataRow}>
                            <div className={classes.dataSingle}>
                                {transaction.tradingparty}
                            </div>
                            <div className={classes.dataSingle}>
                                {transaction.counterparty}
                            </div>
                            <div className={classes.dataSingle}>
                                {transaction.amount}
                            </div>
                        </div>
                    })}
                </div>
            </div>

            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h5" align="center">Paying Transactions</Typography>
            </AppBar>
            <div className={classes.table}>
                <div className={classes.header}>
                    <div className={classes.headers}>tradingParty</div>
                    <div className={classes.headers}>counterParty</div>
                    <div className={classes.headers}>Amount</div>
                </div>
                <div className={classes.body}>
                    {payingTransactions.map((transaction, i) => { 
                        return <div key={i + transaction.tradingparty} className={classes.dataRow}>
                            <div className={classes.dataSingle}>
                                {transaction.tradingparty}
                            </div>
                            <div className={classes.dataSingle}>
                                {transaction.counterparty}
                            </div>
                            <div className={classes.dataSingle}>
                                {transaction.amount}
                            </div>
                        </div>
                    })}
                </div>
            </div>

            <button className={classes.mainBtns} onClick={compressTransactions}>
                    Compress Transactions
            </button>
        </div>
        
        
    </Fragment>
};

export default Lists;