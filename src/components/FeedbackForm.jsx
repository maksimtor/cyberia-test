import React, { Component } from 'react'
import "../assets/css/Header.css"
import TellUsImage from '../assets/images/tell-us.png'

class FeedbackForm extends Component {
    state = {
        isLoggedIn: false,
        username: '',
        email: '',
        password: '',
        fields: {},
        errors: {},
        selectedCategory: null,
        projectcategories: [{}],
        projects: [{
            "id": 30,
            "title": "Манна Маркетплейс",
            "slug": "manna-marketplace",
            "project_url": null,
            "image": "https://backend.cyberia.studio/storage/2023/01/16/790ba2952f26c2b09bc46e3b4f939c7c4dd76c57.png",
            "image_dark": "https://backend.cyberia.studio/storage/2023/01/16/790ba2952f26c2b09bc46e3b4f939c7c4dd76c57.png",
            "description": "Региональная торговая онлайн-площадка для удобного и быстрого шоппинга в любое время",
            "geo": {
                "lat": null,
                "lng": null
            },
            "categories": [
                {
                    "id": 12,
                    "name": "Backend"
                }
            ]
        }]
    }

    render() {
        return (
            <div className='under'>
                <div className='block__container'>
                    <div className="tellUs">
                        <div className='pic'><img src={TellUsImage} alt="react-logo" /></div>
                        <div className='first'>Расскажите о вашем проекте</div>
                        <div className='second'>Поделитесь с нами информацией, чем мы можем быть полезны: реализовать идею или выделить разработчиков для ИТ-команды. Чем больше вы нам расскажете, тем продуктивнее будет дальнейшее обсуждение</div>
                    </div>
                    <form className='form' noValidate onSubmit={this.handleValidation}>
                        <div className={'form__input' + (this.state.email ? ' active' : '')}>
                            <input class="form__control" label="email" type="email" name="email" id="email" value={this.state.email}
                                onChange={e => {
                                    this.setState({ email: e.target.value });
                                }} />
                            <label class="form__label" for="email">Email: </label>
                            <label class="form__error">{this.state.errors['email']}</label>
                        </div>
                        <div className={'form__input' + (this.state.phone ? ' active' : '')}>
                            <input class="form__control" type="phone" name="phone" id="phone" value={this.state.phone}
                                onChange={e => {
                                    this.setState({ phone: e.target.value });
                                }} />
                            <label class="form__label" for="phone">Телефон</label>
                            <label class="form__error">{this.state.errors['phone']}</label>
                        </div>
                        <div className={'form__input' + (this.state.message ? ' active' : '')}>
                            <textarea class="form__control textarea" type="" name="message" id="message" autocomplete="on" value={this.state.message}
                                onChange={e => {
                                    this.setState({ message: e.target.value });
                                }} />
                            <label class="form__label" for="message">Сообщение</label>
                            <label class="form__error">{this.state.errors['message']}</label>
                        </div>
                        <div class="form__submition">
                            <input type="submit" class="form__button button" value="Отправить"></input>
                            <p class="form__description">Нажимая «Отправить», вы даете согласие на обработку персональных данных</p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export { FeedbackForm };