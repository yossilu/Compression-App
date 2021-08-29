import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    formContainer: {
        margin: '30px 0',
    },
    mainBtns: {
        borderRadius: 15,
        height: '30px',
        borderStyle: 'dotted',
        background: 'gray',
        border: 'solid 1px',
        width: '100%',
        marginBottom: '30px',
        color: 'darkblue',
        display: 'inline-block',
        "&:hover": {
            background: 'rgba(0,183,200,1)'
        }
    },
    addInput: {
        margin: '0px 4%',
        display: 'flex',
        width: '90%',
        borderRadius: '15px',
        // padding: '10px'
    },
    formFields: {
        margin: 10,
        paddingLeft: '1%',
        display: 'flex'
    }
    
}));