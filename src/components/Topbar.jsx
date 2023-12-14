import Battery30Icon from '@mui/icons-material/Battery30';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import WifiPasswordIcon from '@mui/icons-material/WifiPassword';
import { Typography, Box, styled } from '@mui/material';

const Container = styled('div')(({ theme: { spacing } }) => ({
    background: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    padding: '5px 15px',
    height: '30px',
    width: '400px',
    justifyContent: 'space-between',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
}))

const Indicators = styled('div')(({ theme: { spacing } }) => ({
    display: 'flex',
    gap: spacing(1)
}))

const Topbar = () => {
    return (
        <Container>
            <Box>
                <Typography variant='body1'>1:21 PM</Typography>
            </Box>
            <Indicators>
                <SignalCellularAltIcon />
                <WifiPasswordIcon />
                <Battery30Icon />
            </Indicators>
        </Container>
    )
}

export default Topbar