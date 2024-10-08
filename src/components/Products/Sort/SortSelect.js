import { FormControl, InputLabel, Select } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import selectItems from '../../../utils';

const SortSelect = ({
  sortStatus,
  setSortStatus,
  fullWidth = false,
  margin = 'none',
}) => {
  const handleChange = (e) => {
    setSortStatus(e.target.value);
  };

  return (
    <FormControl
      variant="outlined"
      margin={margin}
      fullWidth={fullWidth}
      size="medium"
    >
      <InputLabel htmlFor="select-sort">Sırala</InputLabel>
      <Select
        native
        label="Sort"
        value={sortStatus}
        onChange={handleChange}
        inputProps={{
          name: 'sort',
          id: 'select-sort',
        }}
        IconComponent={SortIcon}
      >
        {selectItems.map(({ id, value, label }) => (
          <option key={id} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortSelect;
