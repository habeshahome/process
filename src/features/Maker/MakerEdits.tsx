import { Box, Typography } from '@mui/material'
import ProcessSteps from '../../components/Stepper'
import { MakerForm } from './MakerForm';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const steps = ['Start', 'Update Details', 'Completed'];


export const MakerEdits = () => {
    const { id } = useParams()

    const [task, setTask] = useState<{ id?: string, firstName?: string }>({})

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
            <Box sx={{ p: 3 }}>

                <Typography variant="h3"> Maker  </Typography>
                <br />
                <Typography variant='body2'> Working on {task.firstName}'s Task</Typography>

                <br />

                <Box sx={{ p: 1, py: '32px' }}>
                    <ProcessSteps steps={steps} currentStep={1} />
                </Box>
                <Box sx={{ my: 3 }}>
                    <MakerForm payload={task} />
                </Box>
            </Box>
        </Box>
    )
}