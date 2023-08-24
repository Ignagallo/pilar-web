import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from "react-redux";
import { appSelector, appActions } from "../../redux/appRedux";
import React, { useEffect, useState } from "react";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ChecklistIcon from '@mui/icons-material/Checklist';
import {
    Grid,
    Paper,
    Box,
    Stack,
    Button,
    CardContent,
    Card,
    CardHeader,
    TextField,
    Checkbox,
    handleChecked,
    Typography,
    delTask
} from '@mui/material';


const Todo = () => {
    //const history = useHistory();
    /*
        const redirectToTodo = () => {
            history.push('/todo');
        };
    
        const redirectToFetchList = () => {
            history.push('/fetch-list'); 
        };
    
    */
    const dispatch = useDispatch();
    const todo = useSelector(appSelector.todo);
    const [text, setText] = useState(null);

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleChecked = (e, id) => {
        dispatch(appActions.setCompletedTodo({ id, completed: e.target.checked }))
    }

    const addTask = async () => {
        dispatch(appActions.addTodo({ text: text, id: uuid() }))
        await setText(prev => '')
    }

    const delTask = async (id) => {
        dispatch(appActions.deleteTodo(id))
    }


    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                    <Box sx={{fontWeight:"bold", marginBottom:"5px", fontSize:"1.5em", padding:"10px", borderRadius:"5px", /*border: "1px solid black" ,*/textAlign: "center", backgroundColor: "yellow", boxShadow:"0px 0px 5px 0.1px rgba(0,0,0,0.49)" }}>
                        To Do
                    </Box>

                    <Card>
                        <CardHeader sx={{color: "rgba(0,0,0,1)", marginBottom:"-1.2em"}} title="Agrega una tarea" />
                        <CardContent>
                            <Stack sx={{ justifyContent: 'space-around' }} direction='row'>
                                <Grid item md={10}>
                                    <TextField sx={{width:"75%"}} value={text} label="Tarea" variant="outlined"
                                        onChange={handleChange} />
                                </Grid>
                                <Grid item md={4}>
                                    <Button variant="contained"
                                        onClick={() => addTask()}>Agregar</Button>
                                </Grid>
                            </Stack>
                        </CardContent>
                    </Card>
                    <br></br>
                    <Card>
                        <CardHeader sx={{color: "yellow", borderRadius:"5px" ,backgroundColor:"rgba(0,0,0,0.85)", margin:"5px"}} title="Tareas" />
                        <CardContent>
                            {todo.map((t, index) =>
                            (
                                <Stack key={t.id} sx={{color:"black", paddingTop:"5px" , justifyContent: 'space-between' }}
                                    direction='row'>
                                    <Grid item md={1}>
                                        <Checkbox checked={t.completed} onChange={e => handleChecked(e, t.id)} />
                                    </Grid>
                                    <Grid item md={9} sx={{ pt: 1 }}>
                                        <Typography sx={{
                                            fontSize: 18,
                                            fontWeight: 700
                                        }}>{t.text}</Typography>
                                    </Grid>
                                    <Grid item md={2}>
                                        <Button variant="contained"
                                            onClick={() => delTask(t.id)}>Eliminar</Button>
                                    </Grid>
                                </Stack>
                            )
                            )}
                        </CardContent>
                    </Card>
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

export default Todo;




