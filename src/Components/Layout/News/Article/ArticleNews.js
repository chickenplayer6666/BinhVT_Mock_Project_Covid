import React from 'react';

import {makeStyles} from "../../../../MaterialUI/ExportComponent";
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "../../../../MaterialUI/ExportComponent"

const useStyles = makeStyles((theme) => ({  
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function ArticleNews(props) {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {props.articles.map((article, index) => (
          <Grid item key={index} xs={12} sm={6} md={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={article.urlToImage}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h4" component="h4">
                  {article.title}
                </Typography>
                <Typography>{article.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={article.url}>
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ArticleNews;