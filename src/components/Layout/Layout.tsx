import { Outlet } from "react-router-dom"
import Header from "../Header"
import { Box, createTheme, ThemeProvider } from "@mui/material"
import { SnackbarProvider } from "notistack"

const theme = createTheme({
    typography: {
        fontFamily: "IBM Plex Sans"
    }
})

export const Layout = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <SnackbarProvider
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                >
                    <Box sx={{ minHeight: '100vh' }}>
                        <Header />
                        <Outlet />
                    </Box>
                </SnackbarProvider>
            </ThemeProvider>
        </>
    )
}