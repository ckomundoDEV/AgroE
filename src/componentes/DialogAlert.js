import React from 'react'
import "./Dialog.css"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Carousel from "./Carousel";



function DialogAlert({open, handleClose, imgs}) {
    
    return ( 
        <div className="dialog_container">
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="md"
                
            >
                <DialogTitle id="alert-dialog-title">{"Bule de plastico"}</DialogTitle>
                <div className="dialogBody">
                    <div className="dialogHeader">
                        <DialogContent className="dialogConentHeader">
                            <div></div>
                            <DialogContentText className="text" id="alert-dialog-description">
                                cantidad:  30
                                <br/>
                                calidad: nuevo
                            </DialogContentText>
                        </DialogContent>                        
                    </div>
                    <div className="dialogFooter">
                        <DialogContent className="dialogConentHeader">                            
                            <DialogContentText className="text" id="alert-dialog-description">
                                Description: 
                                <br/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fuga minima assumenda alias blanditiis repellendus amet commodi doloremque minus neque, deserunt facilis ipsum, quos, dolore ad eligendi explicabo repudiandae hic?
                            </DialogContentText>
                        <DialogActions className="buttons">
                            <div className="buttons">
                                <Button onClick={handleClose} color="primary" autoFocus>
                                        Agree
                                </Button>                               
                            </div>
                        </DialogActions>
                        </DialogContent>  

                    </div>
                </div>
            </Dialog> 
        </div>
    )
}

export default DialogAlert
