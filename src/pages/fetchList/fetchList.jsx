import React, { useEffect, useState } from "react";
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
    CardMedia,
    CardContent,
    Typography
} from '@mui/material';
import api from '../../services/api';
import { IMG_URL, } from '../../constants/index';
import { useDispatch } from "react-redux";
import PokemonDetailModal from "../../components/pokemonDetails";

const POKE_IMG = require('../../assets/images/poke-img.png');
const FetchList = () => {
    const dispatch = useDispatch();
    const [pokemons, setPokemons] = useState(null);
    const [next, setNext] = useState("");
    //const [selectedPokemon, setSelectedPokemon] = useState(null);
    //const [selectedAbility, setSelectedAbility] = useState(null);

    useEffect(() => {
        getPokemons()
    }, [])

/*  const handleCardClick = async (pokemon) => {
        setSelectedPokemon(pokemon);
        if (pokemon.abilityUrl) {
            try {
                const abilityResponse = await api.GET(pokemon.abilityUrl);
                setSelectedAbility(abilityResponse);
            } catch (error) {
                console.error("Error al cargar detalles de habilidad:", error);
            }
        }
    };      */

    /*    const handleCloseModal = () => {
        setSelectedPokemon(null);
        setSelectedAbility(null);
    };  */

    const getPokemons = async () => {
        try {
            dispatch(appActions.loading(true))
            const result = await api.GET(api.pokemons)

            if (result) {
                console.log('poke: ', result)
                setPokemons(result.results)
                setNext(result.next)
            }
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(appActions.loading(false))
        }
    }
    const renderItem = (item) => {
        const path = item.url.split('/')
        const imgID = getPokemonImgId(path[6])
        return (
            <Card p={2} sx={{
                display: 'flex', height: '150px', cursor: 'pointer',
                '&:hover': { backgroundColor: 'yellow', color: 'white' }
            }}>
                <CardContent sx={{ flex: '1 0 auto', backgroundColor: "#212121", color: "yellow" }}>
                    <Typography component="div" variant="h5">
                        N° {imgID}
                    </Typography>
                    <Typography component="div" variant="h5">
                        {item.name}
                    </Typography>
                </CardContent>
                <CardContent sx={{ flex: '1 0 auto' }}>


                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: 100, overflow: "visible", alignItems: "center", margin: "auto", width: "150px" }}
                    src={`${IMG_URL}/${imgID}.png`}
                    alt="Live from space album cover"
                />
            </Card>


        )
    };
    const getPokemonImgId = (id) => {
        console.log('long. ' + id.length)
        switch (id.length) {
            case 1:
                return `00${id}`
            case 2:
                return `0${id}`
            default:
                return id
        }
    }
    const loadMore = async () => {
        try {
            dispatch(appActions.loading(true))
            const result = await api.GET(next)
            if (result) {
                console.log('poke: ', result.results)
                setPokemons(prev => [...prev, ...result.results])
                setNext(result.next)
            }
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(appActions.loading(false))
        }
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography component="div" variant="h5">
                                Mi Pokedex
                            </Typography>
                        </Grid>
                        {
                            pokemons && pokemons.map((p, index) => {
                                return (
                                    <Grid item xs={4} key={index}>
                                        
                                            {renderItem(p)}
                                        

                                    </Grid>
                                )
                            })
                        }
                        <Grid item xs={4} >
                            <Card p={2} sx={{
                                display: 'flex', height: 100, cursor: 'pointer',
                                backgroundColor: '#317b52', '&:hover': { backgroundColor: '#5acdbd' }
                            }}
                                onClick={() => loadMore()}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5" sx={{ color: 'white' }}>
                                        Cargar Más
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 100, p: 2 }}
                                    image={POKE_IMG}
                                    alt="Live from space album cover"
                                />
                                
                            </Card>
                        </Grid>
                    </Grid>

                </Paper>



                <Box>
                    <Stack spacing={2} direction="row" sx={{ marginTop: 1 }}>
                        <Link to="/todo" style={{ textDecoration: 'none' }}><Button variant="contained" sx={{ backgroundColor: 'yellow', color: "black" }}><ChecklistIcon /><span style={{ marginLeft: '16px' }}></span>To Do</Button></Link>
                        <Link to="/" style={{ textDecoration: 'none' }}><Button variant="contained" sx={{ backgroundColor: 'yellow', color: "black" }}><ManageSearchIcon /><span style={{ marginLeft: '16px' }}></span>Dashboard</Button></Link>
                    </Stack>
                </Box>

            </Grid>
        </Grid>
        // TARJETAS
    );
};


export default FetchList;
