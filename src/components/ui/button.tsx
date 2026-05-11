interface buttonProps {
  text?: string;
  className?: string;
  backgroundColor?: string;
}

export default function Button({ text, className, backgroundColor = '' }: buttonProps) {
  return (
    <button style={{
      backgroundColor
    }} className={`${className}`}>
      <p className="sr-only">button</p>
      {text}
    </button >
  )
}