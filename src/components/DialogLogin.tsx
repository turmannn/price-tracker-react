import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogBase from "./DialogBase.tsx";
import {JSX} from "react";
import {Stack} from "@mui/material";

interface PropsDialog {
    contentText?: string;
    form?: JSX.Element;
    actions?: JSX.Element;
    onSubmit: (data: FormData) => void;
    labelClose?: string;
    onClose: () => void;
    isOpen: boolean;
}

export default function DialogLogin(props: PropsDialog) {

    // return (
    //     <Dialog
    //         open={open}
    //         onClose={handleClose}
    //         PaperProps={{
    //             component: 'form',
    //             onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
    //                 event.preventDefault();
    //                 const formData = new FormData(event.currentTarget);
    //                 const formJson = Object.fromEntries((formData as any).entries());
    //                 const email = formJson.email;
    //                 console.log(email);
    //                 handleClose();
    //             },
    //         }}
    //     >
    //         <DialogTitle>Subscribe</DialogTitle>
    //         <DialogContent>
    //             <DialogContentText>
    //                 To subscribe to this website, please enter your email address here. We
    //                 will send updates occasionally.
    //             </DialogContentText>
    //             <TextField
    //                 autoFocus
    //                 required
    //                 margin="dense"
    //                 id="name"
    //                 name="email"
    //                 label="Email Address"
    //                 type="email"
    //                 fullWidth
    //                 variant="standard"
    //             />
    //         </DialogContent>
    //         <DialogActions>
    //             <Button onClick={handleClose}>Cancel</Button>
    //             <Button type="submit">Subscribe</Button>
    //         </DialogActions>
    //     </Dialog>
    // );
    function renderForm() {
        return (
            <Stack spacing={2}>
                <TextField
                    autoFocus
                    name={'username'}
                    label={'User Name or Email'}
                    fullWidth
                    required
                    type={'text'}
                />
                <TextField
                    name={'password'}
                    label={'Password'}
                    fullWidth
                    required
                    type={'password'}
                />
            </Stack>
        )
    }

    return (
        <DialogBase
            title="Login"
            form={renderForm()}
            actions={<Button type="submit">Submit</Button>}
            // onSubmit={}
            labelClose={'Cancel'}
            // handleClose={}
            onSubmit={props.onSubmit}
            isOpen={props.isOpen}
            onClose={props.onClose}
        />
    );
}