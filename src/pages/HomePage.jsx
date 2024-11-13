import React, {useState} from 'react';
import {Typography, Box, Divider, Grid, Paper} from '@mui/material';
import SupplierForm from '../components/SupplierForm';
import CatalogUpload from '../components/CatalogUpload';
import CatalogTable from '../components/CatalogTable';
import theme from '../theme';

export default function HomePage() {
    const [selectedSupplier, setSelectedSupplier] = useState(null);

    return (
        <Box sx={{padding: 4}}>
            <Paper
                sx={{
                    padding: 4,
                    backgroundImage: 'linear-gradient(135deg, #EEFF55, #DCB9FF)',
                    borderRadius: 2,
                    marginBottom: 4,
                    textAlign: 'center'
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        color: theme.palette.text.primary,
                        fontWeight: 'bold',
                    }}
                >
                    Supplier and Catalog Management
                </Typography>
            </Paper>

            <Grid container spacing={6} justifyContent="center" alignItems="flex-start">
                <Grid item xs={12} md={5}>
                    <Box sx={{textAlign: 'center', marginBottom: 4}}>
                        <Typography variant="h2" sx={{color: 'text.primary', marginBottom: 2}}>
                            Register a New Supplier
                        </Typography>
                        <Typography variant="body1" sx={{color: 'text.secondary', marginBottom: 2}}>
                            Enter the details of a new supplier, including name, country, and website. This
                            information will be stored in the supplier directory.
                        </Typography>
                        <Divider sx={{marginBottom: 4}}/>
                        <Box sx={{display: 'flex', justifyContent: 'center', mt: 2, width: '100%'}}>
                            <SupplierForm onSupplierSelect={setSelectedSupplier}/>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={5}>
                    {selectedSupplier && (
                        <Box sx={{textAlign: 'center', marginBottom: 6}}>
                            <Typography variant="h2" sx={{color: 'text.primary', marginBottom: 2}}>
                                Select and Load Supplier Catalog
                            </Typography>
                            <Typography variant="body1" sx={{color: 'text.secondary', marginBottom: 2}}>
                                Choose a catalog file associated with the selected supplier to view
                                available products, prices, and other relevant details.
                            </Typography>
                            <Divider sx={{marginBottom: 4}}/>
                            <Box sx={{display: 'flex', justifyContent: 'center', mt: 2, width: '100%'}}>
                                <CatalogUpload selectedSupplier={selectedSupplier}/>
                            </Box>
                        </Box>
                    )}

                    {selectedSupplier && (
                        <Box sx={{textAlign: 'center'}}>
                            <Typography variant="h2" sx={{color: 'text.primary', marginBottom: 2}}>
                                Catalog Data
                            </Typography>
                            <Typography variant="body1" sx={{color: 'text.secondary', marginBottom: 2}}>
                                View the detailed catalog data for the selected supplier, including SMILES,
                                price, and shipping information.
                            </Typography>
                            <Divider sx={{marginBottom: 4}}/>
                            <CatalogTable selectedSupplier={selectedSupplier}/>
                        </Box>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
}
