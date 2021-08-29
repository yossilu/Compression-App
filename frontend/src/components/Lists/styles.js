import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    mainContainer: {
        width: '100%',
        height: '100%',
    },
    table: {
        display: 'block',
        margin: '20px',
        textAlign: 'center'
    },
    header: {
        width: '100%',
        display: 'inline-block',
        height: '30px',
        borderBottom: '1px dotted'
    },
    headers: {
        display: 'inline-block',
        width: '33%'
    },
    body: {
        display: 'block',
        width: '100%',
    },
    dataRow: {
        display: 'inline-block',
        width: '100%'
    },
    dataSingle: {
        display: 'inline-block',
        width: '33%',
        marginTop: '10px'
    },
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,183,255,1)',
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
    
}));