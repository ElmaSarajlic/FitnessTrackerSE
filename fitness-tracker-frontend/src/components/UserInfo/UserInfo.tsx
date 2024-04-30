import { User } from '../../utils/types';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import UserAvatar from '../UserAvatar';

type Props = {
  user: User;
};

const UserInfo = ({ user }: Props) => {
  return (
    <Container maxWidth="sm" sx={{ backgroundColor: 'primary' }}>
      <UserAvatar firstName={user.firstName} lastName={user.lastName} size="80px" fontSize="30px" sx={{ margin: '15px auto' }} />
      <Typography variant="h5">
        {user.firstName} {user.lastName}
        </Typography>
      <Typography variant="body2"> 
        {user.email} 
      </Typography>
      <Button size="medium" variant="outlined" sx={{ marginTop: '20px' }}>
        Edit personal information
      </Button>
    </Container>
  );
};

export default UserInfo;
