import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ErrorBoundary from './components/ErrorBoundary';
import { Container, Typography } from '@mui/material';

const App = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Task Manager
      </Typography>
      <TaskForm />
      <ErrorBoundary>
        <TaskList />
      </ErrorBoundary>
    </Container>
  );
};

export default App;
