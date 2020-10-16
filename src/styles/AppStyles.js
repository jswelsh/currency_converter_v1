import { createMuiTheme } from '@material-ui/core'
import { cyan, teal } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[900]
    },
    secondary: {
      main: cyan[600]
    }
  }
})

export default theme;