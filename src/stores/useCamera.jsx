import { create } from "zustand";
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
    return {
        zoom: 'far',
        rotate: 'default',

        zoomClose: () => {
            console.log('zoom close')
            set(() => {
                return {zoom: 'close'}
            })
        },
        zoomFar: () => {
            console.log('zoom far')
            set(() => {
                return {guiIntroPhase: 'far'}
            })
        },

        rotateToAdu: () => {
            console.log('paning to adu')
            set(() => {
                return {rotate: 'adu'}
            })
        }
    }
}))