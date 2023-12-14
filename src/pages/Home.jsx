import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"

const Container = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'url("src/assets/wallpaper.jpg")',
    backgroundSize: 'contain',
    backgroundRepeat: "no-repeat",
    height: '770px',
    width: '100%',
    alignItems: 'center'
}))

const Home = () => {
    return (
        <Container>
            <Typography variant="h2" style={{ margin: 0, fontSize: '50px' }}>1:21 PM</Typography>
            <Typography variant="body1">Thu, December 14</Typography>
        </Container>
    )
}

export default Home