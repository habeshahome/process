import { Button, ButtonGroup, Container, Divider, Stack, Table, Typography } from "@mui/material"
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useEffect, useState } from "react"
import axios from "axios"

export const Modeler = () => {

    return (
        <>
            <Container sx={{ minWidth: '100vw', background: '#f1f3f5', color: '#979797', minHeight: '90vh', padding: 1 }}>
                <Typography variant="h3" textAlign='left' sx={{ p: 1 }}>
                    Modeler
                </Typography>
                <Stack direction='row' gap={3} sx={{ justifyContent: 'space-between' }}>
                    <ButtonGroup>
                        <Button> Design </Button>
                        <Button> Implementation </Button>
                        <Button> Play </Button>
                    </ButtonGroup>

                    <ButtonGroup>
                        <Button> Deploy </Button>
                        <Button> Run </Button>
                    </ButtonGroup>
                </Stack>
                <Divider sx={{ mt: 9, mb: 3 }} />
                <Stack direction='column' gap={3}>
                    <Stack direction='row' gap={3}>
                        <Typography variant="h6"> Projects </Typography>
                        <Typography variant="h6"> Shared Resources</Typography>
                    </Stack>
                    <ProjectsTable />
                </Stack>
            </Container>
        </>
    )
}





function createData(
    name: string,
    content: string,
    lastChanged: string | Date,
    collaborators: string,
) {
    return { name, content, lastChanged, collaborators }
}


export default function ProjectsTable() {

    const [projectData, setProjectData] = useState<{ name: string, contennt: string }[]>()

    useEffect(() => {
        axios.get('http://localhost:3000/projects')
            .then(response => setProjectData(response.data))
            .catch((err) =>
                console.log(err, "failed to fetch data")
            )
    }, [])

    const rows = [
        createData('ID Update Process', '1 file', new Date(2023, 1, 11), "Bamlak"),
        createData('Event Registration Process', '2 files', new Date(2020, 12, 12), "Bamlak"),
        createData('Quick Start MicroService', '1 file', new Date(1999, 11, 30), "Bamlak")
    ]

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Content</TableCell>
                        <TableCell align="right">Last Changed</TableCell>
                        <TableCell align="right">Collaborators</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.content}</TableCell>
                            <TableCell align="right">{String(row.lastChanged)}</TableCell>
                            <TableCell align="right">{row.collaborators}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
