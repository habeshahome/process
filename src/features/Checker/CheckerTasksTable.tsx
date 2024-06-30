import { Box, FormControl, InputLabel, MenuItem, Select, Table } from "@mui/material"
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function CheckerTaskTable() {

    const [makerTasks, setMakerTaks] = useState<{ id: string, nationalId: string }[]>([])

    useEffect(() => {
        axios
            .get('http://localhost:3000/tasks')
            .then(response => setMakerTaks(response.data))
            .catch((err) =>
                console.log(err, "failed to fetch data")
            )
    }, [])


    return (
        <>
            <Box sx={{ maxWidth: '300px' }}>
                <FormControl fullWidth>
                    <InputLabel id="taskStatus-label">Filter Task</InputLabel>
                    <Select
                        labelId="taskStatus-label"
                        id="taskStatus"
                        label="Filter Options"
                        value="assigned"
                        // onChange={(e) => setTaskStatus(e.target.value)}
                        disableUnderline
                        disableInjectingGlobalStyles
                    >
                        <MenuItem value={"open"}>All Open Tasks</MenuItem>
                        <MenuItem value={"assigned"}>Assigned to me</MenuItem>
                        <MenuItem value={"unassigned"}>Unassigned</MenuItem>
                        <MenuItem value={"completed"}>Completed</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <TableContainer component={Paper} elevation={0}>
                <Table sx={{}} aria-label="maker-tasks-table">
                    <TableHead>
                        <TableRow>
                            <TableCell>National ID</TableCell>
                            <TableCell align="right"> Assigned </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {makerTasks.map((task) => (
                            <TableRow
                                key={task.nationalId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Link to={`${task.id}`}> {task.nationalId}</Link>
                                </TableCell>
                                <TableCell align="right">{task.id}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {/* {
                JSON.stringify(makerTasks)
            } */}
            </TableContainer>
        </>
    )
}
