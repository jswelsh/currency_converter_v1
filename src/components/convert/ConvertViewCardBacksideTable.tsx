import React, {FC} from 'react';
import { IConvertViewCardBacksideTableProps } from '../types'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from '@material-ui/core';

const ConvertViewCardBacksideTable: FC<IConvertViewCardBacksideTableProps> = ({
  recentRateHistory,
  converted,
  amount
}) => {

  const cellConstructor = (value: number) => {
  //styling the delta of previous days to being green +, white =, red -
    const delta = (value > 0) ? 
    <Typography color={'primary'}>{'+'+value+'%'}</Typography> :  (value < 0) ?
    <Typography color={'error'}>{value+'%'}</Typography> :
    <Typography color={'secondary'}>{value+'%'}</Typography>  
    return delta
  }
return(
  <TableContainer component={Paper}>
    <Table size="small" aria-label="a dense table">
      <TableHead>
        <TableRow key={'date'}>
          <TableCell component="th" scope="column">{'date'}</TableCell>
            {recentRateHistory && recentRateHistory.map(({date}) => {
              return <TableCell align="right">{date}</TableCell>
            })}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow key={'value'}>
          <TableCell component="th" scope="row">{'value'}</TableCell>
            {recentRateHistory && recentRateHistory.map(({value}) => {
              return <TableCell align="right">{value}</TableCell>
            })}
        </TableRow>
        <TableRow key={'delta'}>
          <TableCell component="th" scope="row">{'the ∆'}</TableCell>
            {recentRateHistory && recentRateHistory.map(({value}) => {
              return (
              <TableCell align="right">
                {cellConstructor(
                  parseFloat((((value*amount) - (converted))/ (converted)*100).toFixed(5)))}
              </TableCell>)
            })}
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
)}

export {ConvertViewCardBacksideTable}