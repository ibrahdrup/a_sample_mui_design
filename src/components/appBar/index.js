import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {COLORS as Colors} from "../../assets/colors";
import graphic from '../../images/desktop/image-graphic-design.jpg';
// import '../../index.css'
import  apple from "../../images/desktop/image-header.jpg"
import {Container, Grid, SvgIcon, useMediaQuery, useTheme} from "@mui/material";
import '../../styles/styles.css'
import {device} from "../../media";
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';


import {ReactComponent as ArrowIcon} from '../../images/icon-arrow-down.svg'
import MyGrid from "./grid";
const drawerWidth = 240;
const navItems = ['About', 'Services', 'Projects','Content'];


let theme = createTheme();
theme = responsiveFontSizes(theme);




function DrawerAppBar(props) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    // function ArrowIcon(props) {
    //     return (
    //         <SvgIcon {...props}>
    //             <path d="M18 3v100M3 95.484l15 15 15-15" />
    //         </SvgIcon>
    //     );
    // }
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const drawer = (
        <Box onClick={handleDrawerToggle}
             sx={{
                 textAlign: 'center',
                 // background: Colors.pincColor

               }}>
            <Typography variant="h5" sx={{ my: 2}}>
                sunnyshine
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    if(true){}
    const match = useMediaQuery('(min-width:600px)')
    return (
        <ThemeProvider theme={theme}>
        <Box

            sx={
                {
                    // display: 'flex',
                    // flexDirection:'column',
                    // alignContent: 'center',
                    // justifyContent:'center',
                    // gap:0,
                    // overflowX:'none'

                    // background: `url(${Image.src})`

                }
            }

        >
            <AppBar elevation={0}  component="nav" position={"fixed"} sx={
                {
                    backgroundColor:Colors.primaryColor,

              }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        fontFamily="Arial"
                        fontWeight="bold"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        sunnyshine
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block'},
                    }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff', fontFamily:"Arial",
                                textTransform:"none",
                                fontWeight:'normal',
                                '&:hover': {
                                    borderRadius:"10px",
                                    backgroundColor:Colors.secondaryColor,
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav"  >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component='main' className='myBox'
            //      sx={{
            //     //p: 5,height:768,justifyContent:'center',alignItems:'center', }
            //
            // }
            >
                <Toolbar />
                <Typography
                    variant="h2"  textAlign="center"  className='myHeading' fontFamily='sans'
                    textTransform='uppercase'  sx={{
                     mt:13,
                }

                }>
                    We are Creatives
                </Typography>
               <Box sx={{
                   display: 'flex', justifyContent:'center', mt:5, gap:5
               }

               }> <ArrowIcon  />
               </Box>


            </Box>

            <Box width='auto'>

         <MyGrid
             heading={"Transform your brand"}
                 Footer={'Learn More'}

             image ={ <img src = {require('../../images/desktop/image-transform.jpg')} width={'100%'} />}

                 description={' We are fully-service creative agency specializing\n' +
                     '                   in helping brands grow fast. Engage your clients through\n' +
                     '                                compelling visuals that do most of the marketing for you.'}

         />
                <MyGrid heading={"Transform your brand"} imgStart={true}
                        Footer={'Learn More'}
                        image ={ <img src = {require('../../images/desktop/image-stand-out.jpg')} width={'100%'} />}
                        description={' We are fully-service creative agency specializing\n' +
                            '                   in helping brands grow fast. Engage your clients through\n' +
                            '                                compelling visuals that do most of the marketing for you.'}

                />
                <MyGrid imgStart={true} doubleText={true}
                  classname={'grida'}
                  heading={"Transform your brand"}
                  Footer={'Learn More'}
                  description={' We are fully-service creative agency specializing\n' +
                      '                   in helping brands grow fast. Engage your clients through\n' +
                      '                                compelling visuals that do most of the marketing for you.'}
                />





            </Box>
        </Box>

        </ThemeProvider>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;