import TextField from '@material-ui/core/TextField'
import {
    withStyles
} from '@material-ui/core/styles'

const LogTextFiled = withStyles({
    root: {
        '& .MuiInput-underline:before': {
            borderBottom: '1px solid #a5ecff',
        },
        '& .MuiInput-underline:after': {
            borderBottom: '2px solid #61DAFB',
        },
        '& .MuiInputBase-input': {
            color: '#a5ecff'
        },
        '& label': {
            color: '#a5ecff'
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: '1px solid #a5ecff'
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: '#61DAFB'
        }
    },
})(TextField)

export default LogTextFiled