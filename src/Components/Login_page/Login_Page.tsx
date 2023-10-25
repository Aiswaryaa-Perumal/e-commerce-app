import React from 'react'
import styles from './Login_Page.module.css'
import { Button, Grid, TextField } from '@mui/material'
import { TextFields } from '@mui/icons-material';
import Assets from '../../Assets/Images/Index';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Grid className={styles["main-container"]} >

            <Grid className={styles["login-container"]} xs={10}>
                {/* <Grid className={styles["image-contaioner"]} xs={6}>
        <img src={Assets.Login_Image } alt="" className={styles["brand-icon"]} />
    </Grid> */}
                <Grid xs={6}>
                    <Grid className={styles["email-text"]}>
                        <TextField id="outlined-basic" label="Email or Mobile Number" className={styles["email"]} />
                    </Grid>
                    <Grid className={styles["password-text"]}>
                        <TextField id="outlined-basic" label="Password" className={styles["password"]} />
                    </Grid>
                    <Grid className={styles["button-container"]}>
                        <Link to='/shopping'><Button variant="contained">Login</Button></Link>
                        <Link to='/register'><Button variant="text">SingnUp</Button></Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default Login;
