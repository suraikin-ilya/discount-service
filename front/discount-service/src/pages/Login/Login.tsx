import React, { useState } from 'react'
import axios from 'axios'
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import './Login.scss'
import { useDispatch } from 'react-redux'
import { getUser } from '../../store/actions/userActions'
import { useNavigate } from 'react-router'

export const Login = () => {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const setUser = (access: string) => {
        dispatch(getUser(access))
        navigate('/')
    }

    const handleSubmit = async () => {
        try {
            const data = await axios.post('/auth/jwt/create/', {
                username,
                password
            })
            console.log('User has successfully logined', data) 
            const { access } = data.data

            if (access) {
                localStorage.setItem('jwt', access)
                setUser(access)
            }
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className='Login'>
            <div className='Login__title'>Вход</div>
            <Input
                className='Login__input'
                type='text'
                placeholder='Имя пользователя'
                onChange={(value => setUsername(value))}
            />
            <Input
                className='Login__input'
                type='password'
                placeholder='Пароль'
                onChange={(value => setPassword(value))}
            />
            <Button className='Login__btn' onClick={handleSubmit}>Войти</Button>
        </div>
    )
}