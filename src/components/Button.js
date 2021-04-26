import React from 'react'

const Button =  React.forwardRef(({ onClick, variant, href, children, ...props }, ref) => {

    if (variant === "link") return (
        <a href={href} onClick={onClick} ref={ref} {...props} className="cursor-pointer bg-gray-800 text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-700 transform hover:scale-110 transition-transform">
            {children}
        </a>
    )
    return (
        <button onClick={onClick} {...props} className="cursor-pointer bg-gray-800 text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-700 transform hover:scale-110 transition-transform">
            {children}
        </button>
    )
})

export default Button