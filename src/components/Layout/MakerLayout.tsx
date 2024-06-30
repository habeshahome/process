import { Box, Stack, Typography } from "@mui/material"
import { Link, Outlet } from "react-router-dom"

export const MakerLayout = () => {
    return (
        <Box
            display='grid' gridTemplateColumns='2fr 10fr'
            sx={{
                minWidth: '100vw', background: '#f1f3f5', color: '#373737', minHeight: '90vh'
            }}>
            <Box sx={{ background: '#e1e3e5', py: 6, px: 2 }}>
                <Stack direction='column' gap={3}>
                    <Box>
                        <Link to='/maker'> <Typography variant='h6'> Tasks </Typography></Link>
                        <Typography variant='h6'>  </Typography>
                    </Box>
                </Stack>
            </Box>
            <Box sx={{ p: 3, maxWidth: '100%' }}>
                <Outlet />
            </Box>
        </Box>
    )
}