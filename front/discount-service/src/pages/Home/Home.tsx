import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import './Home.scss'
import Image from './img/bg.png'
import Shop from './img/shop.png'

interface IShop {
    id: number,
    magazine: string,
    place: string
}

interface HomeProps {
    isAuth: boolean
}

export const Home = ({ isAuth }: HomeProps) => {

    const [shops, setShops] = useState<IShop[]>([])

    const fetchShops = async () => {
        try {
            const shops = await axios.get('/api/shop/')
            setShops(shops.data)
        } catch(err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
        fetchShops()
    }, [])

    return (
        <div className="Home">
            <div className="Home__container container">
                <div className="Home__preview">
                    <div className="Home__info">
                        <div className="Home__title">Большой выбор скидок для популярных магазинов</div>
                        <div className="Home__subtitle">
                            { isAuth ?
                                `Для просмотра персональных скидок перейдите в личный кабинет`
                                : `Зарегистрируйтесь для получения персональной скидки`
                            }
                        </div>
                        { isAuth ?
                            <Link to='/dashboard'><Button className="Home__action-btn">Личный кабинет</Button></Link>
                          : <Link to='/login'><Button className="Home__action-btn">Зарегистрироваться</Button></Link>
                        }
                    </div>
                    <div className="Home__image"><img src={Image} alt="bg" /></div>
                </div>
                
                <div className="Home__shops">
                    <h2 className="Home__shops-title">Магазины</h2>

                    <div className="Home__shoplist shoplist">
                        { shops && shops.map((shop: IShop) => (
                            <div className="shoplist__item shop-item" key={shop.id}>
                                <div className="shop-item__image"><img src={Shop} alt="shop" /></div>
                                <div className="shop-item__content">
                                    <div className="shop-item__name">{shop.magazine}</div>
                                    <div className="shop-item__location">{shop.place}</div>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </div>
    )
}