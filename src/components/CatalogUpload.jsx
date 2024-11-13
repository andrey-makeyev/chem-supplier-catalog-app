import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useExcelParser} from '../hooks/useExcelParser';
import {addCatalog} from '../features/catalog/CatalogSlice';
import {Button, Select, MenuItem, FormControl, InputLabel, CircularProgress, Box} from '@mui/material';
import axios from 'axios';

export default function CatalogUpload({selectedSupplier}) {
    const dispatch = useDispatch();
    const {parseExcelFile} = useExcelParser();
    const [selectedFile, setSelectedFile] = useState('');
    const catalogs = useSelector((state) => state.catalogs.catalogs);
    const cachedData = catalogs[selectedSupplier];
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setSelectedFile('');
        setLoading(false);
    }, [selectedSupplier]);

    const predefinedFiles = [
        {
            name: 'AnalytiCon Discovery - a Division of BRAIN Biotech AG',
            url: `/data/Catalogs_2024/${encodeURIComponent("AnalytiCon Discovery - a Division of BRAIN Biotech AG.xlsx")}`
        },
        {
            name: 'BIONET - Key Organics Ltd.',
            url: `/data/Catalogs_2024/${encodeURIComponent("BIONET - Key Organics Ltd..xlsx")}`
        },
        {name: 'ChemDiv, Inc.', url: `/data/Catalogs_2024/${encodeURIComponent("ChemDiv, Inc..xlsx")}`},
    ];

    const handleFileChange = (event) => {
        setSelectedFile(event.target.value);
        setLoading(false);
    };

    const handleFileUpload = async () => {
        if (!selectedFile || loading) return;

        setLoading(true);
        try {
            const response = await axios.get(selectedFile, {responseType: 'arraybuffer'});
            const catalogData = await parseExcelFile(response.data);
            dispatch(addCatalog({supplierId: selectedSupplier, catalogData}));
        } catch (error) {
            console.error("Error loading or parsing file:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" width="100%">
            <FormControl fullWidth sx={{maxWidth: '400px'}}>
                <InputLabel>Select Catalog File</InputLabel>
                <Select value={selectedFile} onChange={handleFileChange}>
                    {predefinedFiles.map((file, index) => (
                        <MenuItem key={index} value={file.url}>
                            {file.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button
                variant="contained"
                onClick={handleFileUpload}
                disabled={!selectedFile || loading}
                sx={{mt: 2, maxWidth: '400px', width: '100%'}}
            >
                {loading ? <CircularProgress size={24}/> : "Load Catalog"}
            </Button>
        </Box>
    );
}
