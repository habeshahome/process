import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
            <Typography variant="h3"> Business Process Managment</Typography>
            <Typography variant="body2"> </Typography>
            <Stack gap={3} direction='row' sx={{ my: 3 }}>
                <Typography variant="h4"> <Link to={'checker'}> Checker </Link></Typography>
                <Typography variant="h4"> <Link to={'maker'}> Maker </Link></Typography>
            </Stack>
        </>
    )
}