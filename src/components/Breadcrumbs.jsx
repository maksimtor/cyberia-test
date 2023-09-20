import React from 'react'
import "../assets/css/Header.css"
import Typography from '@material-ui/core/Typography';

const Breadcrumbs = () => {
    return (
        <div className='block__container'>
            <div className='breadcrumbs'>
                <a class="breadcrumbs-link" href="/">Главная /</a><span class="breadcrumbs-link">Проекты</span>
            </div>
            <Typography component="h1" variant="h5">
                <div className='block__title'>Проекты</div>
            </Typography>
        </div>
    )
}

export { Breadcrumbs }