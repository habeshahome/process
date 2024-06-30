import { Box, Stack } from '@mui/material'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CheckerTaskTable from './CheckerTasksTable';

const steps = ['Start', 'Update Details', 'Approve Details', 'Completed'];

export const Checker = () => {

    const [task, setTask] = useState<{ id?: string, firstName?: string }>({})
    const id = useParams()

    useEffect(() => {
        axios
            .get(`http://localhost:3000/tasks/${id}`)
            .then(response => setTask(response.data))
            .catch((err) =>
                console.log(err, "failed to fetch data")
            )
    }, [])

    return (
        <Box>
            <Stack direction='column' gap={6}>
                <CheckerTaskTable />
            </Stack>
        </Box>
    )
}