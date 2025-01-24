import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, removeTask, editTask } from '../redux/tasksSlice';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Paper,
  TextField,
  Box,
} from '@mui/material';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks || []); // انتخاب فقط بخش tasks
    const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [newTitle, setNewTitle] = useState('');

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (id, title) => {
    setEditingTaskId(id);
    setNewTitle(title);
  };

  const saveEdit = (id) => {
    if (newTitle.trim()) {
      dispatch(editTask({ id, newTitle }));
      setEditingTaskId(null);
      setNewTitle('');
    }
  };

  return (
    <div>
      <TextField
        label="Search Tasks"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredTasks.length === 0 ? (
        <Typography variant="h6" align="center" sx={{ mt: 3 }}>
          No tasks found
        </Typography>
      ) : (
        <List sx={{ mt: 2 }}>
          {filteredTasks.map((task) => (
            <ListItem
              key={task.id}
              sx={{ justifyContent: 'center', padding: 0 }}
            >
              <Paper
                elevation={2}
                sx={{
                  width: '100%',
                  padding: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mt: 1,
                }}
              >
                {editingTaskId === task.id ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <TextField
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      size="small"
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => saveEdit(task.id)}
                    >
                      Save
                    </Button>
                  </Box>
                ) : (
                  <ListItemText
                    primary={task.title}
                    sx={{
                      textDecoration: task.completed
                        ? 'line-through'
                        : 'none',
                      cursor: 'pointer',
                    }}
                    onClick={() => dispatch(toggleTask(task.id))}
                  />
                )}
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    variant="outlined"
                    color="info"
                    onClick={() => handleEdit(task.id, task.title)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => dispatch(removeTask(task.id))}
                  >
                    Remove
                  </Button>
                </Box>
              </Paper>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default TaskList;
