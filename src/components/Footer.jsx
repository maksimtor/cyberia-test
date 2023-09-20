import React from 'react';
import '../assets/css/Footer.css';
import CyberiaImage from '../assets/images/cyberia-big.svg'

export const Footer = () => {
    return (
        <>
            <footer className="footer block">
                <div className="block__container">
                    <div className="footer__company">
                        <img src={CyberiaImage} alt="react-logo" />
                        <span className="footer__text">Заказная веб-разработка и усиление IT-команд</span>
                    </div>
                    <div className="footer__columns">
                        <ul className="footer__column">
                            <li className="footer__item">
                                +7 960 959 18 66
                            </li>
                            <li className="footer__item">
                                hello@cyberia.studio
                            </li>
                            <li className="footer__item">
                                г.Барнаул, ул.Аносова, д.3б, оф.8
                            </li>
                        </ul>
                        <ul className="footer__column">
                            <li className="footer__item">
                                <a href='/'>Главная</a>
                            </li>
                            <li className="footer__item">
                                <a href='/'>Услуги</a>

                            </li>
                            <li className="footer__item">
                                <a href='/'>Проекты</a>
                            </li>
                        </ul>
                        <ul className="footer__column">
                            <li className="footer__item">
                                <a href='/'>Блог</a>

                            </li>
                            <li className="footer__item">
                                <a href='/'>О нас</a>
                            </li>
                            <li className="footer__item">
                                <a href='/'>Команда</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="footer__description">
                        <li className="footer__item footer__text">2022, digital-агенство Cyberia</li>
                        <li className="footer__item">
                            <a className="footer__link" href="./privacy-policy.pdf" target="_blank">
                                Политика конфиденциальности
                            </a>
                        </li>
                        {/*<li className="footer__item">*/}
                        {/*    <a className="footer__link" href="../../..//public/phenologies-o-zashchite-personalnyh-dannyh.pdf">*/}
                        {/*        Положение о защите персональных данных*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        {/*<li className="footer__item">*/}
                        {/*    <a className="footer__link" target="_blank" href="/public/politika-v-otnoshenii-obrabotki-i-zashchity-personalnyh-dannyh.pdf">*/}
                        {/*        Политика в отношении обработки и защиты персональных данных*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        {/*<li className="footer__item">*/}
                        {/*    <a className="footer__link" target="_blank" href="/public/oferta-okazaniya-uslug.pdf">*/}
                        {/*        Оферта оказания услуг*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </footer>
        </>
    );
};


