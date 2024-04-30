import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Card, Divider } from '@mui/material';
import UserAvatar from '../UserAvatar';
import { WorkoutLog, User } from '../../utils/types';

type Props = {
    user: User;
    workoutLog: WorkoutLog;
}

const WorkoutCard = ({ user, workoutLog }: Props) => {
    const getDayOfWeek = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
        const [year, month, day] = dateString.split('.').map(Number);
        const date = new Date(year, month - 1, day); // 0-indexed month
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <Card sx={{ margin:'5px', padding: 2, maxWidth: "sm"}}>
            <Container sx={{ display: 'flex', alignItems: 'center' }}>
            <UserAvatar firstName={user.firstName} lastName={user.lastName} />
                <Container sx={{ textAlign: 'left' }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        {user.firstName}
                    </Typography>
                    <Typography variant="body2" sx={{}}>
                        {getDayOfWeek(workoutLog.date)}, {workoutLog.date}
                    </Typography>
                </Container>
            </Container>

            <Divider sx={{ marginTop: '5px', borderColor: "black", opacity: 0.5 }} />

            <Container>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', textAlign: 'left', margin: '10px 0 2px 0' }}>
                    Workout
                </Typography>
                {workoutLog.exercises.map((exercise, index) => (
                    <Typography key={index} variant="body2" sx={{ textAlign: 'left' }}>
                        <span>
                        {exercise.exerciseName} &nbsp; 
                        </span>
                        |  &nbsp;{exercise.sets} sets x {exercise.reps} reps, {exercise.weight} kg
                    </Typography>
                ))}
            </Container>

        </Card>
    );
}

export default WorkoutCard;
