import React, { useState, Fragment} from 'react';
import useStyles from './styles'

const Form = () => {
    const classes = useStyles();

    const [tradingparty, setTradingparty] = useState("me");
    const [counterparty, setCounterparty] = useState("you");
    const [amount, setAmount] = useState(0);

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            

            const body = { tradingparty, counterparty, amount };
            if(tradingparty === ""){
                alert("tradingparty can't be empty")
                return;
            }
            if(counterparty === ""){
                alert("tradingparty can't be empty")
                return;
            }
            const response = await fetch("http://localhost:3001/transactions/addOne", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            if(response.status === 200){
                alert("Transaction has been saved succesfully")
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <Fragment >
            <div className={classes.formContainer}>
                <form onSubmit={onSubmitForm}>
                    <div>
                        <button className={classes.mainBtns}>
                            Add New Transaction
                        </button>
                    </div>
                    <div>
                        <p className={classes.formFields}>
                            <b>
                            tradingParty:
                            </b>
                        </p>
                        <input 
                            type="text" 
                            className={classes.addInput} 
                            value={tradingparty} 
                            onChange={e => setTradingparty(e.target.value)}>

                        </input>
                        <p className={classes.formFields}>
                            <b>
                                counterparty:
                            </b>
                        </p>
                        <input 
                            type="text" 
                            className={classes.addInput} 
                            value={counterparty} 
                            onChange={e => setCounterparty(e.target.value)}>
                        </input>
                        <p className={classes.formFields}>
                            <b>
                                Amount:
                            </b>
                        </p>
                        
                        <input 
                            type="text" 
                            className={classes.addInput} 
                            value={amount} 
                            onChange={e => setAmount(e.target.value)}>
                        </input>
                    </div>
                    
                </form>
            </div>
            
        </Fragment>
        
    );
}

export default Form;