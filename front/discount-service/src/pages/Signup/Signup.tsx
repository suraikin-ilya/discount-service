import React, { useState } from 'react'
import axios from 'axios'
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import '../Login/Login.scss'

export const Signup = () => {

    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSubmit = async () => {
        try {
            await axios.post('/auth/users/', {
                username,
                email,
                password
            })
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className='Login'>
            <div className='Login__title'>Регистрация</div>
            <Input
                className='Login__input'
                type='text'
                placeholder='Имя'
                onChange={(value => setUsername(value))}
            />
            <Input
                className='Login__input'
                type='email'
                placeholder='E-mail'
                onChange={(value => setEmail(value))}
            />
            <Input
                className='Login__input'
                type='password'
                placeholder='Пароль'
                onChange={(value => setPassword(value))}
            />
            <Button className='Login__btn' onClick={handleSubmit}>Зарегистрироваться</Button>
        </div>
    )
}