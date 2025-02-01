import { useMemo, useState } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';
import { ProductData } from '../../interface/Product';
import { Product } from '../../data/Product';

import moment from 'moment';

const ProductListTable = () => {

    // const data: ProductData[] = Product;
    const [data, setData] = useState<ProductData[]>([...Product])

    //should be memoized or stable
    const columns = useMemo<MRT_ColumnDef<ProductData>[]>(
        () => [
            {
                accessorKey: 'productName', //access nested data with dot notation
                header: 'Product Name',
                size: 150,
            },
            {
                accessorKey: 'model',
                header: 'Model',
                size: 150,
            },
            {
                accessorKey: 'ram', //normal accessorKey
                header: 'Ram',
                size: 200,
            },
            {
                accessorKey: 'rom',
                header: 'Rom',
                size: 150,
            },
            {
                accessorKey: 'vendor',
                header: 'Vendor',
                size: 150,
            },
            {
                accessorKey: 'price',
                header: 'Price',
                size: 150,
            },
            {
                accessorFn: (row) => moment(row.purchasedOn).format('MM/DD/YYYY'),
                header: 'purchased on',
                size: 150,
            },
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    });

    return <MaterialReactTable table={table} />;
};

export default ProductListTable;
