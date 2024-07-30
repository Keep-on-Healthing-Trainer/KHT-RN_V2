import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function Create(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={40} height={40} rx={20} fill="#03A4FF" />
      <Path
        d="M20 16.667l-6.667 6.667v3.333h3.334L23.333 20M20 16.667l2.39-2.39.002-.002c.33-.329.494-.494.684-.556a.833.833 0 01.515 0c.19.062.354.227.683.555l1.45 1.45c.33.33.495.495.557.686a.833.833 0 010 .515c-.062.19-.227.355-.556.684h-.001L23.334 20M20 16.667L23.333 20"
        stroke="#fff"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Create;
