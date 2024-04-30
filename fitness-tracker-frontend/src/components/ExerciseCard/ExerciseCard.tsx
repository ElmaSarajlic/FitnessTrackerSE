
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Exercise } from "../../utils/types";

type Props = {
  exercise: Exercise;
};

const ExerciseCard = ({ exercise }: Props) => {
    return (
        <Card sx={{ maxWidth: 250 }}>
          <CardMedia
            sx={{ margin: 'auto', height: 180, width: 190, p: 2, borderBottom: 1, borderColor: 'text.secondary' }}
            image={ exercise.imageUrl }
            title={ exercise.name }
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              { exercise.name }
            </Typography>
            <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' 
            }}>
            { exercise.description }
            </Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <Button size="small">Add to Routine</Button>
            <Button size="small">See More</Button>
          </CardActions>
        </Card>
      );
}

export default ExerciseCard