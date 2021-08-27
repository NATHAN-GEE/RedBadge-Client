import React from 'react'
import { Typography, Dialog, DialogActions,Button } from '@material-ui/core'
interface toggle{
    toggle: boolean
}

class LatchComponent extends React.Component<{}, toggle>{
    constructor(props: any) {
        super(props)
        this.state = {
            toggle: false
        }
        this.toggleModalClose = this.toggleModalClose.bind(this)
        this.toggleModalOpen = this.toggleModalOpen.bind(this)
    }
    toggleModalOpen = () => {
        this.setState({toggle: true})
      }
  toggleModalClose = () => {
      console.log(this.state.toggle)
      this.setState({ toggle: false })
    }
    render() {
        return (
            <div>
            <Button onClick={this.toggleModalOpen}>Baby Latching</Button>
            <Dialog open={this.state.toggle}
                style={{ textAlign: 'center', justifyContent:'center'}}
                maxWidth='xs'
                onClose={this.toggleModalClose}
                fullWidth={true}>
                <Typography paragraph style={{ padding: '10px' }}>
                        <h3>Tips on getting a good latch</h3>
                        <hr/>
                        <Typography style={{textAlign: 'left'}}>

                        <ul style={{listStyleImage:'<ChildFriendlyIcon/>'}}>
                            <li>Postion baby belly to belly and nose to nipple.</li>
                            <li>When baby opens their mouth, move baby, chin first, to breast</li>
                            <li>The baby's chin should be pressed against the breast.</li>
                            <li>Then tilt the baby's head towards the breast for a full latch</li>
                            <li>The baby should be able to look at you</li>
                            <li>If you have pitching, easily break the latch and try again.</li>
                        </ul>
                        </Typography>
                </Typography>
                    <DialogActions>      
                        <Button onClick={()=>this.setState({toggle: false})}>Close</Button>

                    </DialogActions>
            </Dialog>
            
            </div>
        )
    }
}
export default LatchComponent;