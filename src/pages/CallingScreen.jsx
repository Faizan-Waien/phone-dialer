import React, { useEffect, useState } from 'react'
import Topbar from '../components/Topbar'
import { useDispatch, useSelector } from "react-redux"
import MicOffOutlinedIcon from '@mui/icons-material/MicOffOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import DialpadOutlinedIcon from '@mui/icons-material/DialpadOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import CallEndRoundedIcon from '@mui/icons-material/CallEndRounded';
import { Box, Button, Stack, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Container = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    gap: 100,
    alignItems: 'center',
    marginTop: 60
}))

const ButtonGrid = styled(Box)(() => ({
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    rowGap: '50px',
    columnGap: '40px'
}))

const UtilityButton = styled(({ children, ...props }) =>
    <Button variant='contained' {...props}>
        {children}
    </Button>)(() => ({
        height: 70,
        width: 70,
        borderRadius: '50%',
        backgroundColor: 'grey'
    }))

const CallingScreen = () => {

    const { dialer } = useSelector((state) => state.dialer)

    const [callConnect, setCallConnect] = useState(false)

    const [time, setTime] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCallConnect(true)
        }, 1000);
        return () => clearTimeout(timeout);
    }, [])


    useEffect(() => {
        let interval;
        if (callConnect) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1000);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [callConnect]);

    useEffect(() => {
        let timeout
        if (callConnect) {
            timeout = setTimeout(() => {
                navigate('/?tab=2')
            }, 11000)
        }

        return () => clearTimeout(timeout)
    }, [callConnect])

    return (

        <Container>

            <Box textAlign='center'>
                <Typography variant='h3' color={'white'}>{dialer}</Typography>
                <Typography variant='body1'>{callConnect ? 'Call Connected' : 'Connecting...'}</Typography>

                <Stack direction={'row'} justifyContent={'center'}>
                    <Typography variant='body1'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</Typography>
                    <Typography variant='body1'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</Typography>
                </Stack>
            </Box>
            <ButtonGrid>
                <UtilityButton>
                    <MicOffOutlinedIcon fontSize='large' />
                </UtilityButton>

                <UtilityButton>
                    <DialpadOutlinedIcon fontSize='large' />
                </UtilityButton>

                <UtilityButton>
                    <VolumeUpOutlinedIcon fontSize='large' />
                </UtilityButton>

                <UtilityButton>
                    <AddOutlinedIcon fontSize='large' />
                </UtilityButton>

                <UtilityButton>
                    <VideoCallOutlinedIcon fontSize='large' />
                </UtilityButton>

                <UtilityButton>
                    <PeopleAltRoundedIcon fontSize='large' />
                </UtilityButton>
            </ButtonGrid>

            <UtilityButton onClick={() => navigate('/')} sx={{ bgcolor: 'maroon' }}>
                <CallEndRoundedIcon fontSize='large' />
            </UtilityButton>
        </Container>
    )
}

export default CallingScreen