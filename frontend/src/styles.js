import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    mainWindow: {
        position: 'absolute',
        width: '98%',
        height: '90%',
    },
    secondaryContainer: {
        borderRadius: 45,
        borderStyle: 'dotted',
        border: 'solid 2px darkblue',
        height: '90%',
        width: '100%'
    },
    lists: {
        height: '70%',
        width: '100%'
    },
    formBtns: {
        height: '27%'
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
    }
}));