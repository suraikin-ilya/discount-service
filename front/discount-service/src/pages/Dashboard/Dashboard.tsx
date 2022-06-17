import React, { useEffect, useState } from 'react'
import './Dashboard.scss'
import Image from '../Home/img/shop.png'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCustomDiscounts } from '../../store/actions/discountActions'

interface IUser {
    id: number,
    username: string,
    email: string,
    isAuth: boolean
}

interface DashboardProps {
    user: IUser
}

export const Dashboard = ({ user }: DashboardProps) => {

    const [discounts, setDiscounts] = useState<any[]>([])
    const [shops, setShops] = useState<any[]>([])
    const [products, setProducts] = useState<any[]>([])
    const [data, setData] = useState<any[]>([])

    const dispatch = useDispatch()

    const getAllDiscounts = async () => {
        try {
            const discounts = await axios.get('/api/discount/')

            const userDiscounts = discounts.data.filter((item: any) => item.users.indexOf(user.id - 1) !== -1)
            setDiscounts(userDiscounts)
        } catch(err) {
            console.log(err)
        }
    }

    const getAllShops = async () => {
        try {
            const shops = await axios.get('/api/shop/')
            setShops(shops.data)
        } catch(err) {
            console.log(err)
        }
    }

    const getAllProducts = async () => {
        try {
            const products = await axios.get('/api/product/')
            setProducts(products.data)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAllShops()
        getAllDiscounts()
        getAllProducts()
    }, [])

    useEffect(() => {
        if (discounts.length > 0 && shops.length > 0 && products.length > 0) {
            let data: any[] = []
            discounts.forEach((discount: any) => {
                const element: any = {}

                element.id = discount.id
                element.name = discount.discount_name
                element.sale = discount.percent
                element.code = discount.magazine
                element.shops = []
                element.products = []

                discount.shops.forEach((shop: any) => {
                    const tag = shops.find((item: any) => shop === item.id)
                    element.shops.push(tag.magazine)
                })

                discount.products.forEach((product: any) => {
                    const tag = products.find((item: any) => product === item.id)
                    element.products.push(tag.product)
                })

                data.push(element)
            })
            setData(data)
            dispatch(setCustomDiscounts(data))
        }
    }, [discounts, shops, products])

    return (
        <div className="Dashboard">
            <div className="container">
                <div className="Dashboard__userinfo userinfo">
                    <p className="userinfo__name">{user.username}</p>
                    <p className="userinfo__email">{user.email}</p>
                </div>
                <div className="Dashboard__discounts discounts">
                    <h2 className="discounts__title">Ваши скидки</h2>
                    <div className="discounts__items discounts-items">
                        {   data ?
                            data.map((item: any) => (
                                <Link to={`/discount/${item.id}`}>
                                    <div className="discounts-items__item card" key={item.id}>
                                        <div className="card__image"><img src={Image} alt="bg" /></div>
                                        <div className="card__content">
                                            <div className="card__overview">
                                                <div className="card__title">
                                                    <div className="card__sale">{item.sale}%</div>
                                                    <div className="card__name">{item.name}</div>
                                                </div>
                                                <div className="card__tags tags">
                                                    { item.shops.map((tag: any) =>
                                                        <div className="tags__item tag" key={tag}>{tag}</div>
                                                    ) }
                                                </div>
                                            </div>
                                            <div className="card__actions"></div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                            
                            : <h2>На данный момент у вас нет скидок</h2>
                        }
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}