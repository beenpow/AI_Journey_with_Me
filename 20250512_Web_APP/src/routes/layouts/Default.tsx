import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useOutlet, useLocation } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'

export default function Default() {
    const outlet = useOutlet()
    const location = useLocation()
    return <>
        <Header />
        {/* Motion, Animation 을 쓰려면 단순히 Outlet 이라는 컴포넌트로 사용할 수 없음 */}
        {/* <Outlet /> */}
        <AnimatePresence>
            <motion.div
                // key 속성으로 각 페이지의 고유한 값을 넣어줘야함
                key={location.pathname}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                // AnimatePresence 로 감싸주면, 사라지는 페이지에 대한 속성을 추가할 수 있어짐! -> 'exit' 속성 추가
                exit={{ opacity: 0, position: 'absolute'}}
                transition={{ duration: 1 }}>
                {outlet}
            </motion.div>
        </AnimatePresence>
        <Footer />
    </>
}