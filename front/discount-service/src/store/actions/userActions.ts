import axios from 'axios'
import { GET_USER } from '../actionTypes'

export function getUser(access: string) {
    return async (dispatch: any) => {
        try {
            const user = await axios.get('/auth/users/me/', {
                headers: {
                    Authorization: `Bearer ${access}`
                }
            })

            dispatch(getUserSuccess(user.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export function getUserSuccess(user: any) {
    return {
        type: GET_USER,
        user: {
            ...user,
            isAuth: true
        }
    }
}

export function userLogout() {
    localStorage.removeItem('jwt')
    return {
        type: GET_USER,
        user: {
            isAuth: false
        }
    }
}