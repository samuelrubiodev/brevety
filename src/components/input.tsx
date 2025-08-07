type PropsInput = {
  placeHolder?: string
  className?: string
}

export default function Input(props: PropsInput) {
  return (
    <input 
      className={`
        bg-transparent 
        placeholder:text-black text-black 
        text-sm border 
        border-slate-200 
        rounded-md px-3 py-2 transition duration-300 ease 
        focus:outline-none 
        focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow ${props.className}`} 
      placeholder={props.placeHolder} 
      type="url"
      name="url"
      required
    />
  )
}