import ExerciseList from '../components/ExerciseList'
import { Box, Container } from '@mui/material'
import ExerciseModal from '../components/ExerciseModal'
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const ExplorePage = () => {
    const userType = useSelector((state: RootState) => state.auth.userType);

    return (
        <>
            <Container sx={{ mt: 12 }} >
                <ExerciseList />
            </Container>
            <Box sx={{ height: '100px', width: '100px', position: 'fixed', right: 15, bottom: 5 }}>
                {
                    userType === 'ADMIN' &&
                    <ExerciseModal />
                }
            </Box>
        </>
    )
}

export default ExplorePage
