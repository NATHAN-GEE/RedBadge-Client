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
                <Typography paragraph>
                    <h3>How to get a good latch</h3>
                    The baby is more likely to latch on.
                </Typography>
                <DialogActions>
                <button onClick={()=>this.setState({toggle: false})}>Close</button>

                </DialogActions>
            </Dialog>
            
            </div>
        )
    }
}
export default LatchComponent;