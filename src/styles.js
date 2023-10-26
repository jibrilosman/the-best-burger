import { makeStyles } from "@mui/styles";
import BG from './assets/BG-2.png';

export const useStyles = makeStyles((theme) => ({
    root: {
      height: '100',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    },
    imgBG: {
      background: `url(${BG}) no-repeat center center fixed`,
    },
    main: {
      flex: '1',
      overflow: 'hidden',
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
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
        width: '200px',
      },
}));