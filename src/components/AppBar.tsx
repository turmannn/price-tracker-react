import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import DialogLogin from "./DialogLogin.tsx";
import React from "react";
import axios from "axios";
import {apiService} from "../helpers/apiService.ts";
// const axios = require('axios').default;

export default function ButtonAppBar() {
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);

    function handleLoginClick() {
        setIsDialogOpen(true);
    }

    function handleLoginSubmit(data: FormData) {
        const formJson = Object.fromEntries((data).entries());
        console.log('debug', formJson)
        apiService({url: 'api/auth-passport-local/login', method: 'POST', data: formJson})
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "start" }}>
                        Price Checker
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={handleLoginClick}
                    >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <DialogLogin
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                // onSubmit={(data) => {
                //     const formJson = Object.fromEntries((data as any).entries());
                //     console.log('debug', formJson)
                //     // const d = data.entries()
                //     // for (const entr in d) {
                //     //     console.log('debug data: ', entr)
                //     // }
                // }}
                onSubmit={handleLoginSubmit}
            />
        </Box>
    );
}