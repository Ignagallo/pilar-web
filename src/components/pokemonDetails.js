import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    List,
    ListItem,
    ListItemText,
    DialogActions,
    Button,
} from "@mui/material";
import { BASE_URL } from "../constants";

const PokemonDetailModal = ({ open, onClose, pokemon, ability }) => {

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{pokemon.name}</DialogTitle>
            <DialogContent>
                <img src={pokemon.spriteImageUrl} alt={pokemon.name} />
                <Typography variant="h6">Movimientos:</Typography>
                <List>
                    {pokemon.moves.map((move, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={move.name} />
                        </ListItem>
                    ))}
                </List>
                <Typography variant="h6">Habilidades:</Typography>
                <List>
                    {pokemon.abilities.map((ability, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={ability.name} />
                        </ListItem>
                    ))}
                </List>
                {ability && (
                    <div>
                        <Typography variant="h6">Detalles de la Habilidad:</Typography>
                        <Typography>{ability.effect}</Typography>
                    </div>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cerrar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default PokemonDetailModal;
