import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DialpadRoundedIcon from '@mui/icons-material/DialpadRounded';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Dialer from './Dialer';
import Topbar from '../components/Topbar';
import Home from './Home';
import CallLog from './CallLog';
import { Fade, Grow, Slide, Zoom, styled } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const Container = styled(Box)(() => ({
    flexGrow: 1,
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: 430,
    // justifyContent: 'space-between',
    justifyContent: 'start',
    alignItems: 'center',
    borderRadius: 5
}))

const FullWidthDiv = styled('div')(() => ({
    width: '100%'
}))

export default function AppLayout() {
    let [searchParams, setSearchParams] = useSearchParams();
    
    const [value, setValue] = useState(searchParams.get('tab') ? +searchParams.get('tab') : 1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setSearchParams({ tab: newValue })
    };

    return (
        <Container>
            <Topbar />

            <Zoom in={value === 0} component={FullWidthDiv} mountOnEnter unmountOnExit>
                <FullWidthDiv>
                    <TabPanel value={value} index={0}>
                        <Dialer />
                    </TabPanel>
                </FullWidthDiv>
            </Zoom>

            <Fade in={value === 1} component={FullWidthDiv} mountOnEnter unmountOnExit>
                <FullWidthDiv>
                    <TabPanel value={value} index={1} >
                        <Home />
                    </TabPanel>
                </FullWidthDiv>
            </Fade>

            <Slide direction='up' in={value === 2} component={FullWidthDiv} mountOnEnter unmountOnExit>
                <FullWidthDiv>
                    <TabPanel value={value} index={2}>
                        <CallLog />
                    </TabPanel>
                </FullWidthDiv>
            </Slide>

            <Tabs
                orientation="horizontal"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="tabs"
                sx={{ borderRight: 1, borderColor: 'divider', bgcolor: 'transparent', marginTop: 'auto' }}
            >
                <Tab icon={<DialpadRoundedIcon fontSize='large' htmlColor='white' />}{...a11yProps(1)} />
                <Tab icon={<HomeRoundedIcon fontSize='large' htmlColor='white' />}{...a11yProps(0)} />
                <Tab icon={<PhoneIcon fontSize='large' htmlColor='white' />}{...a11yProps(2)} />
            </Tabs>
        </Container>
    );
}
