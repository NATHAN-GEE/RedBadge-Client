import React from 'react'
import EducationComponent from '../EducationComponents/Education'
import { Button, Typography } from '@material-ui/core'
import { Drawer } from '@material-ui/core'
import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu'
import LatchComponent from '../EducationComponents/Latch'
import SecondNightComponent from '../EducationComponents/SecondNight'

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
                <Button  onClick={toggleOn}><MenuIcon/></Button>
                <Drawer anchor={'left'} open={open} onClose={toggleOff} >
                    <Typography style={{padding:'15px'}}>
                        <h3>Education:</h3>
                    <EducationComponent/>   
                        <LatchComponent />
                        <SecondNightComponent/>
                    </Typography>
                </Drawer>
            </div>
            </div>
    )
}
export default Sidebar;