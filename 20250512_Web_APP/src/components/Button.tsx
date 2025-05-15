export default function Button({ 
    children, 
    ...restProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button {...restProps}>{children}</button>
}