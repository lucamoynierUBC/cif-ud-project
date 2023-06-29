// this is where we will put global information. AKA State Management solution 

import { create } from "zustand"

// Im thinking this is how I will be able to share information from the UI and the 3D scene
export default create((set) => {
    return {
        color: "purple",
        changeColor: () => {
            const randomColor = getRandomColor()
            set(() => {
                return {color: randomColor}

            })
        }
    }
})


function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}