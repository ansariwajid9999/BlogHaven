import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

// FORWARD REFERENCE --> WE CREATE AN LOGIN FORM WHERE WE HAVE INPUT FIELD AND WE USE IT FOR USERNAME  , PASSWORD 
// EVERYWHERE AND OUR LOGIN PAGE IS AT DIFFERENT PLACE SO I WANT INPUT FIELD ACCESS ON MY LOGIN PAGE 
// PROVIDE THE REFERENCE. SO REFERENCE HOOK COMES IN PICTURE. 

export default Button