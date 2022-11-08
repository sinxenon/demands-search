import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { setKeyWords, getProductsStatus, searchProducts } from '../../../features/products/productsSlice';

export default function SearchField() {
    const [searchColor, setSearchColor] = useState("#12B8FF")
    const dispatch = useDispatch()
    const status = useSelector(getProductsStatus)
    const searchBarHandling = (text) => {
        if (status === "success")
            dispatch(setKeyWords(text))
        dispatch(searchProducts())
    }

    return (
        <Paper
            component="form"
            variant="outlined"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100', height: 54 }}
        >
            <IconButton type="button" sx={{ p: '10px', color: searchColor }} aria-label="search" size="large"  >
                <SearchIcon fontSize="inherit" />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="I’m looking for..."
                inputProps={{ 'aria-label': 'search demand' }}
                onChange={(e) => searchBarHandling(e.target.value)}
                autoFocus
                onBlur={() => setSearchColor("#8492A6")}
                onFocus={() => setSearchColor("#12B8FF")}
            />
        </Paper>
    )
}
