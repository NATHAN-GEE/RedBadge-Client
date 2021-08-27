import React from 'react'
import { Typography, Dialog, DialogActions, Button } from '@material-ui/core'

interface toggle{
    toggle: boolean
}

class AboutComponent extends React.Component<{}, toggle>{
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
            <Button onClick={this.toggleModalOpen}>About</Button>
            <Dialog open={this.state.toggle}
                style={{ textAlign: 'center', justifyContent:'center'}}
                maxWidth='xs'
                onClose={this.toggleModalClose}
                fullWidth={true}>
                    <Typography paragraph style={{ padding: '10px' }}>
                        <h3>About Author</h3>
                        <hr/>
                        <p>When my wife and I had our baby in 2021 we were given a lot of paper work.
                            I decided that I could put all this paperwork into an application to make it easier.
                            This is my attempt of making that process electronic and all in one place.
                            If you would like to react out to me you can do so on the contact page.
                            Here are some other things I have done.
                        </p>
                        <hr/>
                        <Typography style={{textAlign: 'left'}}>

                        <ul>
                            <li><a href='https://nathan-gee.github.io/Portfolio/' rel="noopener noreferrer" target='_blank'>Portfolio</a></li>
                            <li><a href='https://github.com/NATHAN-GEE' rel="noopener noreferrer" target='_blank'>Github</a></li>
                            <li><a href='https://ng-cocktails.web.app/' rel="noopener noreferrer" target='_blank'>Cocktail Search</a></li>
                            <li><a href='https://travel-agency-client-2021.herokuapp.com/' rel="noopener noreferrer" target='_blank'>School Project</a></li>
                            
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
export default AboutComponent;