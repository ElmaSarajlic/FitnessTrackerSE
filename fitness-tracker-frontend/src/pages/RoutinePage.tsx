import { Box, Container, Typography } from "@mui/material"
import RoutineList from "../components/RoutineList";
import AddRoutineModal from "../components/AddRoutineModal";

const RoutinePage = () => {
    return (
        <>
            <Container sx={{ 
                pt: '50px', 
                display: 'block', 
                margin: '0 auto',
                // media query for mobile devices
                '@media screen and (max-width: 535px)': {
                    pt: '100px'
                }
                }}>
                <Typography variant="h4" color="text.secondary" sx={{ fontWeight: 'bold', letterSpacing: '2px' }}>
                    Your Routines
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <RoutineList />
                </Box>
                <Box sx={{ height: '100px', width: '100px', position: 'fixed', right: 15, bottom: 5 }}>
                    <AddRoutineModal />
                </Box>
            </Container>
        </>
    );
}

export default RoutinePage
