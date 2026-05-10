interface buttonProps {
  text?: string;
  className?: string;
}

export default function Button({ text, className }: buttonProps) {
  return (
    <button className={`${className}`}>
      <p className="sr-only">button</p>
      {text}
    </button>
  )
}