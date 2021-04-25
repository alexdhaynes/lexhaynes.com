import React from 'react'

const Button =  React.forwardRef(({ onClick, href, children }, ref) => {
    return (
        <a href={href} onClick={onClick} ref={ref} className="cursor-pointer bg-gray-800 text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-700">
            {children}
        </a>
    )
})

export default Button