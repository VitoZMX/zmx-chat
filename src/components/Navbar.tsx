import React, {useContext} from 'react'
import logo from '../assets/image/logozmx.svg'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import {Grid} from '@material-ui/core'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {NavLink} from 'react-router-dom'
import {LOGIN_ROUTE} from '../utils/constRoute'
import {useAuthState} from 'react-firebase-hooks/auth'
import {Context} from '../index'
import Avatar from '@mui/material/Avatar'

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        }
    }
})

export function Navbar() {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <AppBar position="fixed" style={{backgroundColor: 'rgba(25, 118, 210, 0.8)', backdropFilter: 'blur(2px)'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters variant={'dense'}>
                    <Avatar src={logo} alt="logoNavBar" variant="square"
                            sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 6,
                            display: {xs: 'none', md: 'flex'},
                            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                            fontFamily: 'Roboto',
                            fontWeight: 300,
                            /*letterSpacing: '.1rem',*/
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >ZMX Community - Chat</Typography>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                            flexGrow: 1,
                            fontFamily: 'Roboto',
                            fontWeight: 200,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >ZMX-Chat</Typography>
                    <Box sx={{flexGrow: 1}}>
                        <Grid container justifyContent={'flex-end'}>
                            <ThemeProvider theme={theme}>
                                {user ?
                                    <Button onClick={() => auth.signOut()} variant={'outlined'}>Log out</Button>
                                    :
                                    <NavLink to={LOGIN_ROUTE}>
                                        <Button variant={'outlined'}>Login</Button>
                                    </NavLink>
                                }
                            </ThemeProvider>
                        </Grid>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}