import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux";

import newsAPI from "../../../Service/newsAPI";
import { MainLayout, ArticleNews } from "../../index";
import {
  Autocomplete,
  TextField,
  InputAdornment,
  SearchIcon,
  Grid,
} from "../../../MaterialUI/ExportComponent";
import { BooleansOfPageActions } from "../../../redux/slices/setBooleansOfPage";

function News(props) {
  const [articles, setArticles] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    handleGetDataNews();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleGetDataNews = async () => {
    try {
      const res = await newsAPI.getDataNewsForTitle("covid");
      setArticles(res.data.articles);
    } catch (err) {
      dispatch(BooleansOfPageActions.toggleErrorPage(true));
      setTimeout(() => {
        dispatch(BooleansOfPageActions.toggleErrorPage(false));
      }, 2000);
    }
  };

  const handleChangeTitleOfNews = (e, value) => {
    console.log(e, value);
  };

  return (
    <MainLayout>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid item sm={3} xs={12}>
          <Autocomplete
            id="articles"
            options={articles}
            getOptionLabel={(option) => option.title}
            onChange={handleChangeTitleOfNews}
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
        </Grid>
      </Grid>
      {articles.length > 0 && <ArticleNews articles={articles} />}
    </MainLayout>
  );
}

export default News;
