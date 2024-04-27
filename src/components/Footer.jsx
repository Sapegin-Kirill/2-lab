import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function Copyright() {
    return (
        <React.Fragment>
            {'© '}
            <Link color="inherit" href="http://localhost:5173/">
                Гениальный сайт
            </Link>{' '}
            {new Date().getFullYear()}
        </React.Fragment>
    );
}

const iconStyle = {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mr: 1,
    '&:hover': {
        bgcolor: 'warning.dark',
    },
};


const Footer = () => {
    return (
        <Typography
            component="footer"
            sx={{ display: 'flex' }}
        >
            <Container sx={{ my: 8, display: 'flex' }}>
                <Grid container spacing={5}>
                    <Grid item xs={6} sm={4} md={3}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-end"
                            spacing={2}
                            sx={{ height: 120 }}
                        >
                            <Grid item sx={{ display: 'flex' }}>
                                <Box component="a" href="https://mui.com/" sx={iconStyle}>
                                    <img
                                        src="\src\images\logo1.png"
                                        alt="MUI"
                                    />
                                </Box>
                                <Box component="a" href="https://react.dev/" sx={iconStyle}>
                                    <img src="\src\images\logo3.png" alt="React" />
                                </Box>
                            </Grid>
                            <Grid item>
                                <Copyright />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h6" marked="left" gutterBottom>
                            Услуги
                        </Typography>
                        <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
                            <Box component="li" sx={{ py: 0.5 }}>
                                <a href="https://cs6.pikabu.ru/post_img/2014/06/30/6/1404117274_1958249232.jpg">Разработка гениальных web-приложений</a>
                            </Box>
                            <Box component="li" sx={{ py: 0.5 }}>
                                <a href="https://pulse-image-post.cdn-tinkoff.ru/c693e8b1-2954-41f7-8f71-b3ed05fc36a7-small.jpeg">Консультирование по любым вопросам</a>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" component='h3'>
                            <img src="\src\images\cat (2).png" alt="cutieCat" />
                            {'Сапегин К.Е. '}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Typography>
    );
}

export default Footer