import DialerButton from '../components/DialerButton'
import CallIcon from '@mui/icons-material/Call'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import { Button, IconButton, Typography, Box, styled } from '@mui/material'
import { useDispatch, useSelector } from "react-redux"
import { backspace, reset } from '../Store/Slice/dialerSlice';
import { useNavigate } from 'react-router-dom';
import { addCall } from '../Store/Slice/recordSlice';
import { useEffect } from 'react';

const Container = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    alignItems: 'center',
    margin: '0px auto'
}))

const ButtonGrid = styled(Box)(() => ({
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    rowGap: '20px',
    columnGap: '20px'
}))

const Display = styled(Box)(() => ({
    display: 'flex',
    width: '100%',
    minHeight: '90px',
    borderBottom: '1px solid grey',
    alignItems: 'center',
    textAlign: 'center'
}))

const DisplayText = styled(Typography)(() => ({
    flexGrow: 1,
    wordBreak: 'break-word',
    overflow: 'auto',
    whiteSpace: 'nowrap'
}))

const Dialer = () => {

    const { dialer } = useSelector((state) => state.dialer)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(reset())
    }, [])

    const handleCall = () => {
        dispatch(addCall({ number: dialer, time: Date.now() }))
        navigate('/connecting')
    }

    const handleBackspace = () => {
        dispatch(backspace())
    }

    return (
        <Container>
            <Display>
                <DisplayText variant='h3' fontSize={50}>
                    {dialer}
                </DisplayText>
                <IconButton onClick={handleBackspace} sx={{ marginLeft: 'auto' }}><BackspaceOutlinedIcon htmlColor='white' /></IconButton>
            </Display>

            <ButtonGrid>
                <DialerButton label='1' />
                <DialerButton label='2' />
                <DialerButton label='3' />
                <DialerButton label='4' />
                <DialerButton label='5' />
                <DialerButton label='6' />
                <DialerButton label='7' />
                <DialerButton label='8' />
                <DialerButton label='9' />
                <DialerButton label='*' />
                <DialerButton label='0' />
                <DialerButton label='#' />
            </ButtonGrid>

            <Box>
                <Button
                    variant='contained'
                    sx={{ height: 70, width: 70, borderRadius: '50%', bgcolor: 'green' }}
                    onClick={dialer.length && handleCall}
                >
                    <CallIcon fontSize='large' />
                </Button>
            </Box>
        </Container>
    )
}

export default Dialer