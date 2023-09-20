import React from 'react';
import '../assets/css/ProjectCard.css';
import ProjectSign from '../assets/images/project_sign.png'


export const ProjectCard = ({
    title,
    description,
    image,
    url
}) => {
    return (
        <div className='projects__item'>
            <img className='project_img' src={image} alt="what" />
            <div className='projects_sign'><img class="projects__item-icon" src={ProjectSign} alt="what" /></div>
            <div className='projects__item-title projects__text'>{title}</div>
            <div className='projects__item-description projects__text'>{description}</div>
        </div>
    );
};
