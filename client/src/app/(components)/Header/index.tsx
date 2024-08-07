import React from 'react'

interface HeaderProps {
    name: string
}

export default function index({ name }: HeaderProps) {
    return (
        <h1 className="text-2xl font-semibold text-gray-700">{name}</h1>
    )
}

