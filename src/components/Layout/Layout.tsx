import { Outlet } from "react-router-dom"
import Header from "../Header"
import { Box, createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
    typography: {
        fontFamily: "IBM Plex Sans"
    }
})
export const Layout = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ minHeight: '100vh' }}>
                    <Header />
                    <Outlet />
                </Box>
            </ThemeProvider>
        </>
    )
}