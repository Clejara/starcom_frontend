
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card } from '@mui/material';

const DataTable = () => {
    return (
        <Paper style={{ width: '75%', height: '75%', margin: '5% auto 0', border: '2px solid black' }}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {Array.from(Array(13).keys()).map((column) => (
                                <TableCell key={column}>Columnas {column + 1}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.from(Array(10).keys()).map((row) => (
                            <TableRow key={row}>
                                {Array.from(Array(13).keys()).map((column) => (
                                    <TableCell key={column}>Row {row + 1}, Columnas {column + 1}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default DataTable;
