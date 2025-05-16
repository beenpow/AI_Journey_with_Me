//import styles from './TextField.module.css'


export default function TextField({ 
    label ,
    hint,
    value,
    onChange,
    deleteValue,
    ...restProps
}: React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    hint?: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    deleteValue: () => void
}) {
    return (
        <div>
            <label
                //className={styles.label}
                className="block"
                >
                {label && <span>{label}</span>}
                <input
                    {...restProps}
                    //className={styles.input}
                    className="w-full border-1 border-gray-400"
                    value={value}
                    onChange={onChange}
                />
            </label>
            <button 
                //className={styles.btn}
                className="bg-red-500 text-white"
                onClick={deleteValue}
            >삭제</button>
            {hint && <p>{hint}</p>}
        </div>
    )
}