import React, { useEffect } from 'react';
// import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

interface Props {
    message: string;
}

const GameFinishedSnackbar: React.FC<Props> = ({ message }) => {
    const [open, setOpen] = React.useState(false);

    // const handleClick = () => {
    //     setOpen(true);
    // };

    useEffect(() => {
        setOpen(true);
    }, [])

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={message}
                action={
                    <>
                        {/* <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button> */}
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </>
                }
            />
        </div>
    );
}

export default GameFinishedSnackbar;
