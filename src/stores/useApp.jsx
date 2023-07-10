// this is where we will put global information. AKA State Management solution 

import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

// Im thinking this is how I will be able to share information from the UI and the 3D scene

// also I think I can use this to spawn in objects?
export default create(subscribeWithSelector((set) => {
    return {
        color: 'purple',
        // state change for displaying each adu
        phase: 'hideAdu',
        // state change for displaying the number to identify each adu
        numberIdentification: 'hide',

        showAdu: () => {
            console.log("spawning adu!")
            set(() => {
                return {phase: 'showAdu'}

            })
        },
        hideAdu: () => {
            set(() => {
                return {phase: 'hideAdu'}

            })
        },
        changeColor: () => {
            const randomColor = getRandomColor()
            set(() => {
                return {color: randomColor}

            })
        },
        displayNumber: () => {
            set(() => {
                return {numberIdentification: 'display'}

            })
        },
        hideNumber: () => {
            console.log('hiding id')
            set(() => {
                return {numberIdentification: 'hide'}

            })
        },
    }
}))


function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}