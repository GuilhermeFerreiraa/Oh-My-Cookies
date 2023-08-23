type Props = {
 label: string,
 disabled: boolean,
 handleOnClick: (e: any) => void,
}

export default function Button({ label, disabled, handleOnClick }: Props) {
 return (
  <button onClick={handleOnClick} disabled={disabled} className={`w-full text-base font-semibold rounded-full px-7 py-[14px] ${disabled ? "bg-gray-200" : "bg-brand-main"} `}>
   {label}
  </button>
 )
}