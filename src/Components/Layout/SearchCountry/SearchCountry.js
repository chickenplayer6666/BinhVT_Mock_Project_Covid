import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  Autocomplete,
  TextField,
  InputAdornment,
  SearchIcon,
} from "../../../MaterialUI/ExportComponent";
import {BooleansOfPageActions} from "../../../redux/slices/setBooleansOfPage"
import countryApi from '../../../Service/countryAPI';

function SearchCountry(props) {
  const [countries, setCountries] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    handleGetAllCountries();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleGetAllCountries = async () => {
    try {
      const res = await countryApi.getAllCountries();
      setCountries(res.data);
    } catch (err) {}
  };

  const handleOnChange = (e, value) => {
    if (value) {
      dispatch(BooleansOfPageActions.toggleLoadingPage(true));
      setTimeout(() => {
        dispatch(BooleansOfPageActions.toggleLoadingPage(false));
      }, 2000);
      history.push(`/${value.country}`);
    }
  };
  return (
    <>
      <Autocomplete
        id="countries"
        options={countries}
        getOptionLabel={(option) => option.country}
        onChange={handleOnChange}
        renderInput={(params) => (
          <TextField
            {...params}
            id="outlined-basic"
            placeholder="Search Country..."
            variant="outlined"
            autoFocus
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </>
  );
}

export default SearchCountry;