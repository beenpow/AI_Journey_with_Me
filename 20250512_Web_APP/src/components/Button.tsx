import Loader from '@/components/Loader'

export default function Button({ 
    children, 
    // 속성을 따로 쓰지 않으면, 기본 값으로 primary 가 들어감
    color = 'primary',
    loading,
    ...restProps
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode,
    loading?: boolean,
    color?: 'primary' | 'secondary' | 'danger' | 'success'
}) {
    const buttonColor = {
        primary: 'bg-blue-500',
        secondary: 'bg-gray-500',
        danger: 'bg-red-500',
        success: 'bg-green-500',
    }
    // 아래 두 줄은 같은 결과를 준다!! javascript 의 특징!
    // console.log(buttonColor.primary)
    // console.log(buttonColor['primary'])
    // console.log(buttonColor[color])


    return <button {...restProps} 
    className={`relative block h-[30px] min-w-[40px] ${buttonColor[color]} px-3 text-white rounded-md`}>
        {loading ? <Loader 
            color="white"
            size={16}
            weight={2}
        /> : children}
    </button>
}

// <Button loading={true}>저장 </Button>