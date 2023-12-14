import { Button, styled } from "@mui/material"
import { useDispatch } from "react-redux"
import { dial } from "../Store/Slice/dialerSlice"

const StyledButton = styled(Button)(() => ({
    height: 80,
    width: 80,
    borderRadius: '50%',
    backgroundColor: '#242424',
    fontSize: '40px'
}))

const DialerButton = ({ label }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(dial(label))
    }

    return (
        <StyledButton variant='contained' onClick={handleClick}>
            {label}
        </StyledButton>
    )
}

export default DialerButton