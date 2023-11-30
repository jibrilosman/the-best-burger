import { makeStyles } from "@mui/styles";
import BG from './assets/BG-2.png';
import CatBG from './assets/categoryBG.png';

export const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
    root: {
      height: '100',
      display: 'flex',
      flexDirection: 'column',
    },
    imgBG: {
      background: `url(${BG}) no-repeat center center fixed`,
    },
    main: {
      flex: '1',
      overflow: 'auto',
      flexDirection: 'column',
      display: 'flex',
    },
    center: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    white: {
      color: '#fff',
      fontWeight: '900',
      fontFamily: 'lato',
    },
    
    homeLogo :{
        width: '100%',
        height: '100%',   
      },
      touchIcon: {
        color: '#FFE600',
        position: 'absolute',
        top: '50%',
        left: 'calc(50% - 24px)',
        fontSize: '80px',
      },
      cards: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      card:{
        margin: '10px',
      },
      space: {
        padding: '10px',
      },
      media: {
        width: '100px',
      },
      top_banner: {
        width: '100%',
        height: '100px',
      },
      catBG: {
        height: '100%',
        backgroundColor: '#FFE600',
        background: `url(${CatBG}) no-repeat`,
        backgroundSize: 'cover',
      },
     
      catName: {
        color: '#FFE600',
        fontWeight: '600',
        fontFamily: 'League Spartan, sans-serif',
        fontSize: '20px',
        textAlign: 'center',
        padding: '10px',
        // margin: '10px',
        backgroundColor: '#000',
        borderRadius: '5px',
      },
      
      
}));