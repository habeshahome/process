import { Box, Button, ButtonGroup, Container, Divider, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"

export const Modeler = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

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
                <Box display='grid' gridTemplateColumns='2fr 5fr 5fr' sx={{ textAlign: 'center' }}>
                    <Box>
                        <Box>
                            <Typography variant="h6"> Upload BPMN Diagram </Typography>
                            <input type='file' onChange={onSelectFile} />
                        </Box>
                        <Divider orientation="vertical" />
                    </Box>
                    <Box sx={{ flexGrow: 0, maxWidth: '500px'}}>
                        {selectedFile && <img src={preview} alt=""/>}
                        <Divider orientation="vertical" />
                    </Box>
                    <Box>
                        JSON
                    </Box>
                </Box>

            </Container>
        </>
    )
}




