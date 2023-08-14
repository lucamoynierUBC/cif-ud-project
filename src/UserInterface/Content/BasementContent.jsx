import { useInView } from "react-intersection-observer"

export default function BasementContent() {
    const { ref: myRef, inView: visible} = useInView({
        onChange: (visible) => {
            
            console.log("Basement visibility is: ", visible)
            
        }
    })
    
    // const myRef = useRef()
    // const [visible, setVisible] = useState()

    // useEffect(() => {
    //     const observer = new IntersectionObserver ((entries) => {
    //         const entry = entries[0]
    //         setVisible(entry.isIntersecting)
    //     })
    //     observer.observe(myRef.current)
    // }, [])

    return(
        <div>
            <h2 ref={myRef}>Basement Adu</h2>
            <img src="https://i.imgur.com/IAWbwqm.png" width={"100%"}></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis dis parturient montes.</p>
        </div>
    )
}