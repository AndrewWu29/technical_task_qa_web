import React from "react"
import SwipeableViews from 'react-swipeable-views';
import {
  Skeleton,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@mui/material';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    const base = `https://api.thecatapi.com/v1/images/search`;
    const endpoint = `${base}?limit=24&size=thumb&api_key=${process.env.REACT_APP_CATS_API_KEY}`;

    fetch(endpoint)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    const rick = `
      Never gonna give you up
      Never gonna let you down
      Never gonna run around and desert you
      Never gonna make you cry
      Never gonna say goodbye
      Never gonna tell a lie and hurt you
    `.trim().replace(/ +(?= )/g,'').replace(/(\r\n|\n|\r)/gm, "").split(' ');
    let count = 0;

    if (error) {
      return (
        <>
          <Container maxWidth="sm" id="news_failed">
            <Typography align="center" color="text.primary" gutterBottom>
              Failed to load news
            </Typography>
            <Typography align="center" color="text.secondary">
              {error.message}
            </Typography>
          </Container>
        </>
      );
    } else if (!isLoaded) {
      return (
        <>
          {[1,2,3].map((item) => (
            <Grid item key={item} xs={12} sm={6} md={4}>
              <Skeleton id={ `skeleton_${item}` } variant="rectangular" height={170} />
            </Grid>
          ))}
        </>
      );
    } else {
      return (
        <>
          {items.map((article, i) => (
            <Grid item key={article.id} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <SwipeableViews enableMouseEvents style={{'height': 200, 'overflow': 'hidden'}}>
                  <CardMedia
                    id={ `article_image_${i}` }
                    component="img"
                    image={ article.url }
                    alt="random"
                  />
                  {items.map((subarticle, c) => (
                    <CardMedia
                      id={ `article_carousel_image_${i}_${c}` }
                      component="img"
                      image={ subarticle.url }
                      alt="random"
                    />
                  ))}
                </SwipeableViews>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" style={{'text-transform': 'capitalize'}}>
                    { rick[count++] }
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the
                    content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    id={ `article_link_${i}` }
                    size="small"
                    href={ (i == 23) ? process.env.REACT_APP_RICK : article.url }>
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </>
      );
    }
  }
}

export default Articles;
