
import './Caret.css'

export default function Caret(props){

    return(
        <div className="caret-container" onClick={() => {props.setVisible(!props.visible), props.setVisibleState()}}>
            <div className="caret">
                <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 10"
                >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4m6-8L7 5l4 4"
                />
                </svg>
            </div>
        </div>
    )
    
}