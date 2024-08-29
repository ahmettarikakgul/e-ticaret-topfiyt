import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../../store/actions';
import useStyles from './styles';

const selectProducts = (state) => state.products.products;
const selectQuery = (state) => state.products.query;

const Search = memo(() => {
  const products = useSelector(selectProducts);
  const query = useSelector(selectQuery);
  const dispatch = useDispatch();
  const classes = useStyles();

  const [focused, setFocused] = useState(false);

  const handleChangeSelect = (e, value) => {
    value
      ? dispatch(allActions.productsActions.setSearchValue(value))
      : dispatch(allActions.productsActions.setSearchValue(''));
  };

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const options = products
    .map((product) => product.title)
    .sort((a, b) => a.localeCompare(b));

  return (
    <div className={classes.search}>
      <Autocomplete
        freeSolo
        id="search-autocomplete"
        selectOnFocus
        size="small"
        autoComplete
        clearOnEscape
        clearOnBlur
        fullWidth
        options={options}
        classes={{
          clearIndicator: classes.indicator,
        }}
        onChange={handleChangeSelect}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Ürün ara .."
            variant="outlined"
            className={`${classes.input} ${focused ? classes.inputFocused : ''}`}
            value={query}
            onFocus={handleFocus}
            onBlur={handleBlur}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
});

export default Search;
