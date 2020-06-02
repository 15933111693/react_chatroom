import Button from '@material-ui/core/Button'
import {
    withStyles
} from '@material-ui/core/styles'

const LogButton = withStyles({
    root: {
        color: '#61DAFB',
        border: '1px solid #61DAFB'
    }
})(Button)

export default LogButton