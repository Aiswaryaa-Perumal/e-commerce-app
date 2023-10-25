import React from 'react'
import {Button, Grid, TextField} from '@mui/material'
import styles from './Register.module.css'
import { Link } from "react-router-dom";

const Register = () =>{
    return(<Grid className={styles["Register-main-container"]}>
        <Grid className={styles["sub-main-container"]}>
        <Grid className={styles["textfield-container"]}>
            <Grid className={styles["text-fiels-container"]}>
        <TextField id="outlined-basic" label="First Name" variant="outlined" className={styles["text-field"]} />
        </Grid>
        <Grid className={styles["text-fiels-container"]}>
        <TextField id="outlined-basic" label="Last Name" variant="outlined" className={styles["text-field"]} />
        </Grid>
        <Grid className={styles["text-fiels-container"]}>
        <TextField id="outlined-basic" label="Email" variant="outlined" className={styles["text-field"]} />
        </Grid>
        <Grid className={styles["text-fiels-container"]}>
        <TextField id="outlined-basic" label="Password" variant="outlined" className={styles["text-field"]} />
        </Grid>
        <Grid className={styles["text-fiels-container"]}>
        <Link to='/'><Button variant="contained">Register</Button></Link>
        </Grid>
        </Grid>
        
        </Grid>

    </Grid>);
}
export default Register;