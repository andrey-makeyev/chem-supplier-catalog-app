import React, {useState, useEffect, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

export default function CatalogTable({selectedSupplier}) {
    const catalogs = useSelector((state) => state.catalogs.catalogs);
    const catalogData = catalogs[selectedSupplier] || [];

    const [visibleData, setVisibleData] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setVisibleData(catalogData.slice(0, 20));
        setHasMore(catalogData.length > 20);
    }, [catalogData]);

    const fetchMoreData = useCallback(() => {
        const nextData = catalogData.slice(visibleData.length, visibleData.length + 20);
        setVisibleData(prevData => [...prevData, ...nextData]);
        if (visibleData.length + 20 >= catalogData.length) setHasMore(false);
    }, [catalogData, visibleData.length]);

    const handleScroll = (event) => {
        const {scrollTop, scrollHeight, clientHeight} = event.target;
        if (scrollHeight - scrollTop === clientHeight && hasMore) {
            fetchMoreData();
        }
    };

    const headers = catalogData.length > 0 ? Object.keys(catalogData[0]) : [];

    return (
        <TableContainer
            component={Paper}
            sx={{maxHeight: 400}}
            onScroll={handleScroll}
        >
            <Table stickyHeader sx={{minWidth: 700, width: '100%'}}>
                <TableHead>
                    <TableRow>
                        {headers.map((key) => (
                            <TableCell key={key} sx={{fontWeight: 'bold'}}>
                                {key}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {visibleData.map((row, index) => (
                        <TableRow key={index}>
                            {headers.map((key, i) => (
                                <TableCell key={i}>{row[key]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
