import { create } from 'zustand'

export const useColorStore = create<{
    color: string
    setColor: (color: string) => void
}>((set) => {
    return {
        color: 'red',
        // 매개변수로 받은 값을 color 에 넣는다.
        // javascript 에서는 매개변수로 받은 값을 변수에 넣을 때, 두 이름이 같으면 변수명을 생략할 수 있다.
        setColor: (color: string) => set({ color/*:color*/ })
    }
})