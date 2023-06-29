// this is where we will put global information. AKA State Management solution 

import { create } from "zustand"

// Im thinking this is how I will be able to share information from the UI and the 3D scene
export default create(() => {
    return {
        color: 'teal'
    }
})