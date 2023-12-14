import { DeleteOutline } from '@mui/icons-material'
import { IconButton, styled, Box, Typography, Collapse } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeRecord } from '../Store/Slice/recordSlice'
import { TransitionGroup } from 'react-transition-group';

const Container = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    background: 'black',
    padding: '20px 0px'
}))

const LogItem = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing(1),
    padding: spacing(1)
}))

const CallLog = () => {

    const { record } = useSelector((state) => state.record)

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(removeRecord(id))
    }

    const parseTime = (val) => {
        const time = new Date(val)
        const hours = time.getHours()
        const minutes = time.getMinutes()
        const period = hours > 12 ? 'PM' : 'AM'

        return `${hours % 12}:${String(minutes).padStart(2, '0')} ${period}`
    }

    return (
        <Container>
            <Typography variant='h4'>Call Log</Typography>
            <Box height={500} overflow={'auto'}>
                {record.map((item) => {
                    return (
                        <TransitionGroup>
                            <Collapse key={item.id}>
                                <LogItem>
                                    <Typography variant='h6'>{item.number}</Typography>
                                    <Typography variant='body1' sx={{ marginLeft: 'auto' }}>{parseTime(item.time)}</Typography>
                                    <IconButton onClick={() => handleDelete(item.id)}><DeleteOutline color='error' /></IconButton>
                                </LogItem>
                            </Collapse>
                        </TransitionGroup>
                    )
                })}
            </Box>
        </Container>
    )
}

export default CallLog