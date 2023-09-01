import React, { useEffect, useState } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { appSelector, appActions } from "../../redux/appRedux";
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ChecklistIcon from '@mui/icons-material/Checklist';
import {
    Grid,
    Paper,
    Box,
    Alert,
    List,
    Card,
    CardHeader,
    CardContent,
    Typography
} from '@mui/material';
import Todo from "../todo/todo";

const Dashboard = () => {
    const tasks = useSelector(appSelector.todo);

    const completedTasks = tasks.filter(todo => todo.completed);
    const pendingTasks = tasks.filter(todo => !todo.completed);


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
                        <Link to="/todo" style={{ textDecoration: 'none' }}><Button variant="contained" sx={{ backgroundColor: 'yellow', color: "black" }}><ChecklistIcon /><span style={{ marginLeft: '16px' }}></span>To Do</Button></Link>
                        <Link to="/fetchList" style={{ textDecoration: 'none' }}><Button variant="contained" sx={{ backgroundColor: 'yellow', color: "black" }}><ManageSearchIcon /><span style={{ marginLeft: '16px' }}></span>Fetch List</Button></Link>
                    </Stack>
                </Box>
                <Stack sx={{ width: 'auto', display: "flex", flexDirection: "row", marginTop: "10px", justifyContent: "space-between" }}>
                    <Alert className="pendiente" sx={{ fontWeight: "bold", width: "49%", }} severity="info">Tareas pendientes por realizar: {pendingTasks.length}</Alert>
                    <Alert className="realizada" sx={{ fontWeight: "bold", width: "49%", }} severity="success">Tareas completadas: {completedTasks.length}</Alert>

                </Stack>


                <List className="cuadro-tarea-1" sx={{ width: "49%", marginRight: "1%", borderRadius: "5px", marginTop: "5px", maxWidth: "50%", backgroundColor: "transparent" }}>
                    <Card sx={{ height: "10%", backgroundColor: "transparent", border: "none", boxShadow: "none" }}>
                        <CardHeader />
                        <CardContent sx={{ backgroundColor: "#fff", height: "50%", overflow: "auto", marginTop: "-.5%", position: "relative", top: "-40px" }}>
                            {pendingTasks.map((task) => (
                                <Typography key={task.id} >
                                    {task.text}
                                </Typography>
                            ))}
                        </CardContent>
                    </Card>
                </List>
                <List className="cuadro-tarea-2" sx={{ width: "49%", marginLeft: "1%", borderRadius: "5px", marginTop: "5px", maxWidth: "50%", backgroundColor: "transparent" }} >
                    <Card sx={{ height: "10%", backgroundColor: "transparent", border: "none", boxShadow: "none" }}>
                        <CardHeader />
                        <CardContent sx={{ backgroundColor: "#fff", height: "50%", overflow: "auto", marginTop: "-.5%", position: "relative", top: "-40px" }}>
                            {completedTasks.map((task) => (
                                <Typography key={task.id} >
                                    {task.text}
                                </Typography>
                            ))}
                        </CardContent>
                    </Card>
                </List>


            </Grid>

        </Grid >


        // TARJETAS
    );
};


export default Dashboard;
