import React, { useEffect } from "react";
//import { useHistory } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ChecklistIcon from '@mui/icons-material/Checklist';
import {
    Grid,
    Paper,
    Box
} from '@mui/material';


const Dashboard = () => {
    //const history = useHistory();
/*
    const redirectToTodo = () => {
        history.push('/todo');
    };

    const redirectToFetchList = () => {
        history.push('/fetch-list'); 
    };

*/


    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                    <Box>
                        Dashboard
                    </Box>

                </Paper>
                <Box>
                    <Stack spacing={2} direction="row" sx={{ marginTop: 1 }}>
                        <Button /*onClick={redirectToTodo}*/ variant="contained" sx={{ backgroundColor: 'yellow', color: "black" }}><ChecklistIcon /><span style={{ marginLeft: '16px' }}></span>To Do</Button>
                        <Button /*onClick={redirectToFetchList} */ variant="contained" sx={{ backgroundColor: 'yellow', color: "black" }}><ManageSearchIcon /><span style={{ marginLeft: '16px' }}></span>Fetch List</Button>
                    </Stack>
                </Box>
            </Grid>
        </Grid>

        // TARJETAS

    );
};

export default Dashboard;
