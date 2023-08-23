"use client"
import Image from 'next/image'
import openEyes from '../../../public/icons/open_eyes.svg'
import closeEyes from '../../../public/icons/close_eyes.svg'
import errorIcon from '../../../public/icons/error.svg'
import { useState } from 'react';

type props = {
  label: string,
  placeholder: string,
  type: string,
  error_text?: string,
  hasError?: boolean,
  value: string | number,
  onChange: (e: any) => void,
}

export default function FormGroup({
  type,
  label,
  value,
  onChange,
  hasError,
  error_text,
  placeholder,
}: props) {

  const [showPassword, setShowPassword] = useState<Boolean>(false);

  return (
    <div className="flex flex-col gap-y-2 w-[385px]">
      <label htmlFor={label ? label : 'text'} className="text-gray-500 text-sm">
        {label ? label : "texto alternativo"}
      </label>


      <div className="flex w-full relative">
        <input
          type={type === "password" && showPassword ? "text" : type === "text" ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder ? placeholder : "texto alternativo"}
          className={`block w-full p-4 rounded-lg border-2 outline-none sm:text-sm enabled:hover:border-gray-400 transition-all appearance-none ${hasError ? "border-brand-main focus:border-brand-main text-brand-main placeholder-brand-main" : "border-gray-200 focus:border-gray-300 text-gray-400 placeholder-gray-400"}`} />

        {type === "password" && (
          <button onClick={() => setShowPassword((prevState) => !prevState)}>
            <span className="absolute ease-in inset-y-0 right-4 flex items-center pl-2">
              {showPassword ? (
                <Image
                  src={openEyes}
                  className="h-5 w-5"
                  alt="opened_eyes"
                />
              ) : (
                <Image
                  src={closeEyes}
                  className="h-5 w-5"
                  alt="closed_eyes"
                />
              )}
            </span>
          </button>
        )}
      </div>

      {hasError && (
        <div className="flex gap-x-2">
          <Image
            src={errorIcon}
            alt="error-icon"
          />
          <span className="text-brand-main text-sm">
            {error_text ? error_text : "Valor inválido. Tente novamente"}
          </span>
        </div>
      )}
    </div>
  )
}