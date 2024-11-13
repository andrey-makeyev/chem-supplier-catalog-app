import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addSupplier} from '../features/supplier/SupplierSlice';
import {
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Snackbar,
    Alert,
    Modal,
    Box,
    Typography
} from '@mui/material';

export default function SupplierForm({onSupplierSelect}) {
    const dispatch = useDispatch();
    const suppliers = useSelector((state) => state.suppliers.suppliers);

    const [newSupplier, setNewSupplier] = useState({
        name: '',
        country: '',
        website: '',
    });
    const [showModal, setShowModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const [websiteError, setWebsiteError] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setNewSupplier({name: '', country: '', website: ''});
        setWebsiteError(false);
        setShowModal(false);
    };

    const handleAddSupplier = () => {
        const urlRegex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/;
        if (!urlRegex.test(newSupplier.website)) {
            setWebsiteError(true);
            return;
        }
        setWebsiteError(false);

        if (newSupplier.name && newSupplier.country && newSupplier.website) {
            dispatch(addSupplier({...newSupplier, id: suppliers.length + 1}));
            setSuccessMessage(true);
            handleCloseModal();
        }
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" width="100%">
            <Button
                variant="contained"
                color="primary"
                onClick={handleOpenModal}
                sx={{mb: 2, maxWidth: '400px', width: '100%'}}
            >
                Add New Supplier
            </Button>

            <FormControl fullWidth margin="normal" sx={{maxWidth: '400px'}}>
                <InputLabel>Supplier</InputLabel>
                <Select
                    onChange={(e) => onSupplierSelect(e.target.value)}
                    defaultValue=""
                >
                    {suppliers.map((supplier) => (
                        <MenuItem key={supplier.id} value={supplier.id}>
                            {supplier.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Modal open={showModal} onClose={handleCloseModal} aria-labelledby="add-supplier-modal">
                <Box sx={{
                    width: '400px',
                    p: 3,
                    m: 'auto',
                    mt: '15%',
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    boxShadow: 24
                }}>
                    <Typography variant="h6" id="add-supplier-modal" gutterBottom>
                        Add New Supplier
                    </Typography>
                    <TextField
                        label="Supplier Name"
                        value={newSupplier.name}
                        onChange={(e) => setNewSupplier({...newSupplier, name: e.target.value})}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Country"
                        value={newSupplier.country}
                        onChange={(e) => setNewSupplier({...newSupplier, country: e.target.value})}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Website URL"
                        value={newSupplier.website}
                        onChange={(e) => setNewSupplier({...newSupplier, website: e.target.value})}
                        error={websiteError}
                        helperText={websiteError ? "Please enter a valid URL" : ""}
                        fullWidth
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" onClick={handleAddSupplier} sx={{mt: 2, width: '100%'}}>
                        Save Supplier
                    </Button>
                    <Button onClick={handleCloseModal} sx={{mt: 1, width: '100%'}}>Cancel</Button>
                </Box>
            </Modal>

            <Snackbar
                open={successMessage}
                autoHideDuration={3000}
                onClose={() => setSuccessMessage(false)}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            >
                <Alert onClose={() => setSuccessMessage(false)} severity="success">
                    Supplier added successfully!
                </Alert>
            </Snackbar>
        </Box>
    );
}
