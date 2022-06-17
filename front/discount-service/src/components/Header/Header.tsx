import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLogout } from '../../store/actions/userActions'
import './Header.scss'

interface HeaderProps {
    isAuth: boolean
}

export const Header = ({ isAuth }: HeaderProps) => {

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(userLogout())
    }

    return (
        <header className='header'>
            <div className="header__container container">
                <div className="header__logo">
                    <Link to='/'>Sales</Link>
                </div>
                <div className="header__actions">
                { isAuth ?
                    <>
                        <Link to='/dashboard'>Личный кабинет</Link>
                        <Link to='/' onClick={logoutHandler}>Выход</Link>
                    </>
                    :
                    <>
                        <Link to='/login'>Вход</Link>
                        <Link to='/signup'>Регистрация</Link>
                    </>
                }
                </div>
            </div>
        </header>
    )
}