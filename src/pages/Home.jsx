import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"
import Background from '../assets/wallpaper.jpg'

const Container = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    position: 'relative'
}))

const Wallpaper = styled('img')(() => ({
    width: '100%',
    height: 'auto',
    position: 'absolute',
    top: 0
}))

const Home = () => {
    return (
        <Container>
            <Box zIndex={2} textAlign={'center'}>
                <Typography variant="h2" style={{ margin: 0, fontSize: '50px' }}>1:21 PM</Typography>
                <Typography variant="body1">Thu, December 14</Typography>
            </Box>
            <Wallpaper src={Background} />
        </Container>
    )
}

export default Home