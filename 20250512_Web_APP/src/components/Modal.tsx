import { useNavigate } from "react-router";

export default function Modal({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate()
    return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vw] items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full bg-black/70"
            onClick={() => {
                // 어두운 영역(overlay) 을 클릭하면 '뒤로 가기를 한번해라' 라는 뜻
                navigate(-1)
            }}
        ></div>
        {/* 화면이 지금 좌측에 뜨는데, 중앙에 띄우도록 코드 수정 필요*/}
        <div className="w-[600px] min-h-[100px] bg-white relative rounded-md overflow-y-auto max-h-[90%]">{children}</div>
    </div>
    )
}