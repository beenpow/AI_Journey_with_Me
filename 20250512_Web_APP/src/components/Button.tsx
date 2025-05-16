import Loader from '@/components/Loader'

export default function Button({ 
    children, 
    loading,
    ...restProps
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean
}) {
    return <button {...restProps} className="relative bg-amber-600 py-2 px-3 text-white rounded-md">
        {loading ? <Loader /> : children}
    </button>
}

// <Button loading={true}>저장 </Button>