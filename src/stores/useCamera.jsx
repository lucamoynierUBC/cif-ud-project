import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware"

// Global state for camera, used to determine when to animante its position, zoom etc. 
export default create(subscribeWithSelector((set) => {
    return {
        zoom: false,
        rotate: "default",
        orthographic: true,

        changePerspective: () => {
            set((state) => {
                console.log("perspective is", !state.orthographic)
                return {orthographic: !state.orthographic}
            })
        },

        zoomClose: () => {
            set((state) => {
                console.log("zoom is", !state.zoom)
                return {zoom: !state.zoom}
            })
        },
        zoomFar: () => {
            set(() => {
                return {zoom: false}
            })
        },
        rotateToAdu: () => {
            set(() => {
                return {rotate: "adu"}
            })
        },
        rotateBirdsEye: () => {
            set(() => {
                return{rotate: "birdsEye"}
            })
        },
        resetCamera: () => {
            set(() => {
                return{rotate: "far"}
            })
        }
    }
}))