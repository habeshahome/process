import { Button, Container, Typography } from '@mui/material'

export const Editor = () => {
    return (
        <Container sx={{ minWidth: '100vw', background: '#f1f3f5', color: '#979797', minHeight: '90vh', padding: 1 }}>
                <Typography variant="h3"> Editor </Typography>
                <Button> Approved </Button>
        </Container>
    )
}