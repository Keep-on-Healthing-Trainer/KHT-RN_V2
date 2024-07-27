import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ProfileArrow(props) {
  return (
    <Svg
      width={9}
      height={16}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 1l7 7-7 7"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ProfileArrow;