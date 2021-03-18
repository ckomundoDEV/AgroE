import React from 'react'
import { 
    AppBar, Toolbar, Typography,
} from '@material-ui/core'

function NavBar() {
    return (
        <div>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Typography variant="h6">
                        hola mundo
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
