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
    MuiSelect: {
      root: {
        color:'#fff'
      },
    },
    MuiMenuItem: {
      root: {
        color:'#fff'
      },
    },
    MuiInputBase:{
      root:{
        color:'#fff'
      }
    },MuiInputLabel:{
      root:{
        color:'#8CFFDA'
      }
    },
    MuiSvgIcon: {
      root:{
        color:'#8CFFDA'
      }
    },
    MuiTypography: {
      root: {
        color:'#fff'
      }
    }
  },
})

export default theme;