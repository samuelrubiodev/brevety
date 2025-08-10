type PropsInput = {
  placeHolder?: string
  className?: string
}

export default function Input(props: PropsInput) {
  return (
    <input 
      className={`
        text-black
        bg-blue-200 
        placeholder:text-black
        text-sm border 
        border-slate-200 
        rounded-md px-3 py-2 transition duration-300 ease 
        focus:outline-none 
        focus:border-blue-400
        focus:bg-blue-300
        shadow-sm 
        focus:shadow ${props.className}`} 
      placeholder={props.placeHolder} 
      type="url"
      name="url"
      required
    />
  )
}