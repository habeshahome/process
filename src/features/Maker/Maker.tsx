import { Box, Stack } from '@mui/material'
import MakerTaskTable from './MakerTasksTable';

export const Maker = () => {
    return (
        <Box>
            <Stack direction='column' gap={6}>
                <MakerTaskTable />
            </Stack>
        </Box>
    )
}