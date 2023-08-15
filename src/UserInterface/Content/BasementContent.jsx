import { useInView } from "react-intersection-observer"

export default function BasementContent() {
    // records when this component is viewable in the browser
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
            <p>The <b>basement</b> ADU is suited well to units with limited lot space, since it is internal to its existing housing unit.</p>
        </div>
    )
}