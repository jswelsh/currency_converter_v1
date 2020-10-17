import { createMuiTheme } from '@material-ui/core'
import {  grey,  } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: {
      main: '#8CFFDA'
    },
    action: {
      
      },
  },
  overrides: {
    MuiList: {
      root: {
        background:'#222222'
      },
    },
    MuiFormControl: {
      root: {
        color:'#fff'
      },
    }
  },
})

export default theme;