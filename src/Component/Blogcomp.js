import React,{useState,useEffect} from "react";
import { AppBar, Box, Grid, makeStyles, Toolbar, Typography,Container, Card, CardActionArea, CardMedia, CardContent, CardActions, Avatar  } from '@material-ui/core'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Axios from 'axios'

const useStyle = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "black",
  },
  movie: {
    backgroundImage: `linear-gradient(rgba(0 , 0 , 0 , 0.5), rgba(0 , 0 , 0 , 0.5 )), url('https://img.wallpapersafari.com/desktop/1920/1080/32/67/xKHzSM.jpg')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "red",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  blogsContainer:{
      paddingTop: theme.spacing(3),
  },
  card:{
      maxWidth:'100%',
  },
  media:{
      height:'60vh'
  },
  cardAction:{
      display:'flex',
      margin:"0 10px",
      justifyContent: 'space-between'
  },
  author:{
      display:"flex"
  },
}));

const Blogcomp = () => {
    const[allCharacter,setAllCharacter]=useState([])

    useEffect(()=>{
        getCharacter()},[])

     const getCharacter=() => Axios.get("https://www.breakingbadapi.com/api/characters").then((response)=>{
        console.log(response,'res')
        setAllCharacter(response.data)
    })
    
    const classes=useStyle();
    return (
        <>
          <AppBar className={classes.appbar} position="sticky">
          <Toolbar>
          <Typography variant="h4" color="secondary">
            Netflix
          </Typography>
          </Toolbar>
          </AppBar>  
          <Box className={classes.movie}>
              <Box>Watch Exclusive Videos</Box>
          </Box>
          <Container maxWidth="lg" className={classes.blogsContainer}>
            <Grid container spacing={3}>
            {allCharacter.map((items,index)=>
            <Grid item xs={12} sm={6} md={4}>
             <Card className={classes.card}>
             <CardActionArea>
                 <CardMedia
                     className={classes.media}
                     image={items.img}
                     
                 />
                 <CardContent>
                     <Typography gutterBottom variant="h5" component="h2">
                     {items.name}
                     </Typography>
                 </CardContent>
             </CardActionArea>
             <CardActions className={classes.cardAction}>
             <Box className={classes.author}>
             <Avatar src={items.img}/>
             <Box ml={2}>
             <Typography variant="subtitle2" component="p">
             {items.nickname}
             </Typography>
               <Typography variant="subtitle2" color="textSecondary" component="p">
                      {items.birthday}
                    </Typography>
             </Box>
             </Box>
              <Box>
                <BookmarkBorderIcon/>
                </Box>
             </CardActions>
             </Card>
            </Grid>)}

            </Grid>
          </Container>
        </>
    )
}

export default Blogcomp
