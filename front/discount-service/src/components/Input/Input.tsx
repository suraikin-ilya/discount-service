import React from 'react'
import './Input.scss'

interface InputProps {
    className?: string,
    type: string,
    value?: string,
    placeholder?: string,
    onChange: (text: string) => void
}

export const Input = ({ className, type, value, placeholder, onChange }: InputProps) => {
    return (
        <input
            className={`${className} input`}
            onChange={(e) => onChange(e.target.value)}
            type={type}
            value={value}
            placeholder={placeholder}
        />
    )
}