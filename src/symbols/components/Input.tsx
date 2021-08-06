/**
 * Input.tsx
 * Input for symbols.
 */

// Node Modules
import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';


// Hooks
import {useSymbolsAPI} from '../hooks';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Input() {
  // Hooks
  const classes = useStyles();
  const {get} = useSymbolsAPI();
  const symbolsAll = useSelector(({symbols}) => symbols.all);

  useEffect(() => {
    get();
  }, [get]);

  const menuItemsJSX = Object.keys(symbolsAll).map((symbol) => (
    <MenuItem key={symbol} value={symbol}>{symbol}</MenuItem>
  ));

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>Symbol</InputLabel>
      <Select>
        {menuItemsJSX}
      </Select>
    </FormControl>
  );
}