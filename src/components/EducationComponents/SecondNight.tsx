import React from 'react'
import { Typography, Dialog, DialogActions, Button } from '@material-ui/core'

interface toggle{
    toggle: boolean
}

class SecondNightComponent extends React.Component<{}, toggle>{
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
            <Button onClick={this.toggleModalOpen}>Baby's Second Night</Button>
            <Dialog open={this.state.toggle}
                style={{ textAlign: 'center', justifyContent:'center'}}
                maxWidth='xs'
                onClose={this.toggleModalClose}
                fullWidth={true}>
                    <Typography paragraph style={{ padding: '10px' }}>
                        <h3>Baby's second night</h3>
                        <hr/>
                        <p>Multiple studies show that mothers and babies benefit from skin-to-skin.
                            Immediately after birth and during the first week, the baby and mother build that
                            bond of connection.
                        </p>
                        <hr/>
                        <Typography style={{textAlign: 'left'}}>

                        <ul>
                            <li>The baby is more likely to latch on.</li>
                            <li>Regulates boby temperature</li>
                            <li>Baby cries less</li>
                            <li>Helps normalize heart reate and blood pressure</li>
                            <li>The baby is more likely to breastfeed exclusively</li>
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
export default SecondNightComponent;