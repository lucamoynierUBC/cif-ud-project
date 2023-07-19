import { create } from "zustand";
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
    return {
        phase: 'interaction3',
        setPhaseFour: () => {
            console.log('interaction # 3')
            set(() => {
                return {phase: 'interaction4'}
            })
        }
        
    }
}))