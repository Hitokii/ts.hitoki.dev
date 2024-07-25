import { useTheme } from "../theme-provider"
import { CSSProperties } from "react";


export default function Logo() {


    const stroke: CSSProperties = {
        fill: 'none',
        stroke: useTheme().theme === "light" ? "black" : "white",
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '50px',
    }
    
    return (<>
    <svg id="Layer_2" style={{width: 48}} data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 319.84 498.72">
      <g id="Layer_1-2" data-name="Layer 1">
        <g>
          <polyline points="25 391.26 25 25 153.55 153.55" style={stroke}></polyline>
          <path d="M294.84,342.86l-141.28,130.86V30.7s109.15-33.5,109.15,89.32-109.15,102.72-109.15,102.72" style={stroke}></path>
        </g>
      </g>
    </svg>
    </>
    )
}