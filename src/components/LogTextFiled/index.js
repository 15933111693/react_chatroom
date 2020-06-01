import TextField from '@material-ui/core/TextField'
import {
    withStyles
} from '@material-ui/core/styles'

const LogTextFiled = withStyles({
    root: {
        '& .MuiInput-underline:before': {
            borderBottom: '1px solid #a5ecff',
        },
        '& .MuiInputBase-input': {
            color: '#a5ecff'
        },
        '& label': {
            color: '#a5ecff'
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: '1px solid #a5ecff'
        }
    },
})(TextField)

export default LogTextFiled