import { Container, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Phone Book
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Add, delete and edit contacts in your personal phone book.
        </Typography>        
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/registration"
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default Home;