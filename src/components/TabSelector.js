import React from 'react';
import { 
  List,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import History from '@material-ui/icons/Timeline';
import Converter from '@material-ui/icons/Transform';
import Compare from '@material-ui/icons/Sort';
import { makeStyles, useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
}));

function ListItemLink(props) {
  const classes = useStyles();
  const { icon, primary, to, modeHandler, mode } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <Link to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );
  const onClickHandler = () => {
    modeHandler(primary)
  }

  return (
    <li>
      <ListItem
        button
        className={classes.listItemLink} 
        component={renderLink}
        selected={mode === primary}
        onClick={() =>{
          onClickHandler() 
        }}
      >
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}


export default function TabSelector(props) {

  const commonProps = (payload) => ({
    mode:props.mode,
    modeHandler: props.modeHandler,
    to: payload,
    primary: payload 
  })

  return (
    <List aria-label="currency exchange views">
      <ListItemLink
        {...commonProps('Converter')}
        icon={<Converter />} />
      <ListItemLink 
        {...commonProps('History')}
        icon={<History />} />
      <ListItemLink 
        {...commonProps('Compare')}
        icon={<Compare />} 
        compare={{
          compareListHandler:props.compareListHandler,
          compareList:props.compareList
        }}
      />
    </List>  
  )
}