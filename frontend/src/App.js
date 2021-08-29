import React, { Fragment } from 'react';
import { AppBar, Typography } from '@material-ui/core'
import Form from './components/Form/transactionForm';
import useStyles from './styles'
import Lists from './components/Lists/Lists';

const App = () => {
    const classes = useStyles();
    return (
        <Fragment >
            <div className={classes.mainWindow}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">Compression App</Typography>
                </AppBar>
                <div className={classes.secondaryContainer}>
                    <div className={classes.lists}>
                        <Lists></Lists>
                    </div>
                    <div className={classes.formBtns}>
                        <Form></Form>
                    </div>
                </div>
            </div>
            
        </Fragment>
    );
}


export default App;