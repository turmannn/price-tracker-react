import React, {JSX, useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Box} from "@mui/material";

interface PropsDialog {
    title?: string;
    contentText?: string;
    form?: JSX.Element;
    actions?: JSX.Element;
    onSubmit?: (data: FormData) => void;
    labelClose?: string;
    onClose: () => void;
    isOpen: boolean;
}

export default function DialogBase(props: PropsDialog) {
    return (
        <Dialog
            disableRestoreFocus
            fullWidth
            maxWidth="xs"
            open={props.isOpen}
            onClose={props.onClose}
            PaperProps={{
                component: 'form',
                onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    props.onSubmit?.(formData)
                    props.onClose();
                },
            }}
        >
            <DialogTitle>{ props.title }</DialogTitle>
            <DialogContent>
                { props.contentText && (
                    <DialogContentText>
                        { props.contentText }
                    </DialogContentText>
                )}
                { props.form && ( <Box py={1}>{props.form}</Box> )}
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>{props.labelClose || 'Ok'}</Button>
                { props.actions }
            </DialogActions>
        </Dialog>
    );
}