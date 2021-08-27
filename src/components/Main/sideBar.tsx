import React from 'react'
import EducationComponent from '../EducationComponents/Education'
import { Button, Typography } from '@material-ui/core'
import { Drawer } from '@material-ui/core'
import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu'
import LatchComponent from '../EducationComponents/Latch'
import SecondNightComponent from '../EducationComponents/SecondNight'
import AboutComponent from '../EducationComponents/About';
import ContactComponent from '../EducationComponents/Contact';

const Sidebar = () => {
    const [open, setOpen] = useState(false)

    const toggleOn = () => {
        return setOpen(true)
    }
    const toggleOff = () => {
        return setOpen(false)
    }
    return (
        <div>
            <div>
                <Button  onClick={toggleOn}>Menu<MenuIcon/></Button>
                <Drawer anchor={'left'} open={open} onClose={toggleOff} >
                    <Typography style={{padding:'45px'}}>
                        <h3>Education:</h3>
                        <hr />
                        <br/>
                        <EducationComponent />
                        <br/>
                        <LatchComponent />
                        <br/>
                        <SecondNightComponent />
                        <br/>
                        <AboutComponent />
                        <br/>
                        <ContactComponent/>
                    </Typography>
                </Drawer>
            </div>
            </div>
    )
}
export default Sidebar;