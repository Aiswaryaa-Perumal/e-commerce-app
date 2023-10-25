import React from 'react'
import { Grid } from '@mui/material'
import styles from './Shopping-window.module.css'
import Assets from '../../Assets/Images/Index'
import { useNavigate } from 'react-router-dom';
const CardContent = [
    {
        image: Assets.Women_Image,
        ProductFor: "Women",
        Details: {
            assets: [
                {
                    image: Assets.Women_Image,
                    ProductFor: "Women-1"
                },
                {
                    image: Assets.Women_Image,
                    ProductFor: "Women-2",
                }
            ]
        }
    },
    {
        image: Assets.Men_Image,
        ProductFor: "Men",
        Details: {
            assets: [
                {
                    image: Assets.Men_Image,
                    ProductFor: "Men-1",
                },
                {
                    image: Assets.Men_Image,
                    ProductFor: "Men-2",
                }
            ]
        }
    },
    {
        image: Assets.Kids,
        ProductFor: "Kids",
        Details: {
            assets: [
                {
                    image: Assets.Kids,
                    ProductFor: "Kids",
                },
                {
                    image: Assets.Kids,
                    ProductFor: "Kids",
                }
            ]
        }
    }
];




const ShoppingWindow = () => {
    const navigate = useNavigate();
    const onClickOnCard = (Content: any) => {
        navigate('/products', { state: Content })
    }

    return (
        <Grid container className={styles["shopping-window-main-container"]}>
            <Grid item className={styles["profile-header"]}>
                {/* <Grid item className={styles[""]}>

                </Grid> */}
                <Grid item className={styles["header-contents"]}>
                    <Grid item className={styles["Options-container"]}>
                        <Grid item >
                            <span className={styles["option"]}>HOME</span>
                        </Grid>
                        <Grid item >
                            <span className={styles["option"]}>SHOP</span>
                        </Grid>
                        <Grid item >
                            <span className={styles["option"]}>PRAMOTION</span>
                        </Grid>
                        <Grid item >
                            <span className={styles["option"]}>PAGES</span>
                        </Grid>
                        <Grid item >
                            <span className={styles["option"]}>BLOG</span>
                        </Grid>
                        <Grid item >
                            <span className={styles["option"]}>CONTACT</span>
                        </Grid>
                    </Grid>
                    <Grid item className={styles["icons-main-container"]}>
                        <Grid item className={styles["search-icon-container"]}>
                            <img src={Assets.Search_Icon} alt="" className={styles["icon-prop"]} />
                        </Grid>
                        <Grid item className={styles["profile-icon-container"]}>
                            <img src={Assets.Profile_Icon} alt="" className={styles["icon-prop"]} />
                        </Grid>
                        <Grid item className={styles["cart-option-container"]}>
                            <img src={Assets.Cart_Icon} alt="" className={styles["icon-prop"]} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container className={styles["shopping-main-container"]}>

                <Grid item className={styles["main-poster"]}>
                    <img src={Assets.Login_Image} alt="" className={styles["brand-image"]} />
                </Grid>

                <Grid item className={styles["card-container"]} >
                    {CardContent.map((Content: any) => {

                        return (

                            <Grid item className={styles["Card"]} xs={2} spacing={6}>
                                <Grid item> <img onClick={() => onClickOnCard(Content)} src={Content.image} alt="" className={styles["card-image"]} />
                                    <span>{Content.ProductFor}</span>
                                </Grid>
                            </Grid>

                        );

                    })};
                </Grid>

            </Grid>

        </Grid>
    );
}
export default ShoppingWindow;