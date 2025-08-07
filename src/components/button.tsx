type ButtonProps = {
  title: string
  className?: string
}

export default function Button(props: ButtonProps) {
  return <button className={`px-4 py-2 font-bold text-white bg-blue-500 rounded hover:cursor-pointer hover:bg-blue-600 ${props.className}`}>
    {props.title}
  </button>
}