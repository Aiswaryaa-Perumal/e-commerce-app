import { Grid } from '@mui/material';
import React from 'react'
import styles from '../Shopping_Page/Shopping-window.module.css'
import { useLocation } from 'react-router-dom';



const Products = (props: any) => {
    const { state } = useLocation();

    return (
        <div>
            <Grid container className={styles['product-container']}>
                <span className={styles['product-name']}>{` ${state.ProductFor} ${state.Details.assets?.length} Products`}</span>
            </Grid>
            <Grid item className={styles["card-container"]} >
                {state.Details.assets.map((Content: any) => {
                    return (

                        <Grid item className={styles["Card"]} xs={2} spacing={6}>
                            <img src={Content.image} alt="" className={styles["card-image"]} />
                            <span>{Content.ProductFor}</span>
                        </Grid>

                    );
                })};
            </Grid>
        </div>
    )
}

export default Products
