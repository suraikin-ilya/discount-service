import React, { ReactNode } from 'react'
import './Button.scss'

interface ButtonProps {
    className?: string,
    children: ReactNode,
    onClick?: () => void
}

export const Button = ({ className, children, onClick }: ButtonProps) => {
    return (
        <button
            className={`${className} btn`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}