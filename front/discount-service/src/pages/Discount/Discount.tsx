import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { setCustomDiscount } from '../../store/actions/discountActions'
import './Discount.scss'
import Image from './img/image.png'

interface IUser {
    id: number,
    username: string,
    email: string,
    isAuth: boolean
}

interface DiscountProps {
    user: IUser
}

export const Discount = ({ user }: DiscountProps) => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const discounts = useSelector((state: any) => state.discount.discounts)
    const discount = useSelector((state: any) => state.discount.discount)

    useEffect(() => {
        const found = discounts.find((item: any) => id == item.id)
        dispatch(setCustomDiscount(found))
    }, [discounts])
    
    return (
        <div className="Discount">
            <div className="Discount__container container">
                <div className="Discount__userinfo userinfo">
                    <p className="userinfo__name">{user.username}</p>
                    <p className="userinfo__email">{user.email}</p>
                </div>

                <div className="Discount__card discount-card">
                    <div className="discount-card__image"><img src={Image} alt="img" /></div>
                    { discount.name ?
                        <div className="discount-card__overview">
                        <div className="discount-card__title">
                            <div className="discount-card__sale">{discount.sale}%</div>
                            <div className="discount-card__name">{discount.name}</div>
                        </div>
                        <div className="discount-card__shops">
                            <div className="discount-card__subtitle">Магазины со скидкой</div>
                            <div className="tags">
                                { discount.shops.map((tag: any) =>
                                    <div className="tags__item tag" key={tag}>{tag}</div>
                                ) }
                            </div>
                        </div>
                        <div className="discount-card__products">
                            <div className="discount-card__subtitle">Скидка на товары</div>
                            <div className="tags">
                                { discount.products.map((tag: any) =>
                                    <div className="tags__item tag" key={tag}>{tag}</div>
                                ) }
                            </div>
                        </div>
                        <div className="discount-card__products">
                            <div className="discount-card__subtitle">Купон</div>
                            <div className="code">{discount.code}</div>
                        </div>
                    </div> : null
                    }
                </div>
            </div>
        </div>
    )
}