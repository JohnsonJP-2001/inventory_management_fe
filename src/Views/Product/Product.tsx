import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ProductListTable from '../../Components/Product/ProductListTable';

import { MdAdd } from "react-icons/md";
import { MdOutlineRefresh } from "react-icons/md";


const ProductPage: React.FC = () => {
    return (<Grid container spacing={2}>
        <Grid size={12}>
            <Typography variant="h6" gutterBottom>
                Product List
            </Typography>
        </Grid>

        <Grid size={12} style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <Button className='primaryBtnStyles' size="small" variant="contained" startIcon={<MdOutlineRefresh />}>Refresh</Button>
            <Button className='primaryBtnStyles' size="small" variant="contained" startIcon={<MdAdd />}>Add</Button>
        </Grid>

        <Grid size={12}>
            <ProductListTable />
        </Grid>
    </Grid>)
}

export default ProductPage