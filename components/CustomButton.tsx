'use client'
import { CustomButtomProps } from '@/types'
import Image from 'next/image'

const CustomButton = (
    {title, 
    btnType,
    containerStyles, 
    handleClick} : CustomButtomProps) => {
  return (
    <button
        disabled={false}
        type={btnType}
        className={`custom-btn ${containerStyles}`}
        onClick={() => {}}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton