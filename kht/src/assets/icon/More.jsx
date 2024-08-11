import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function More(props) {
  return (
    <Svg
      width={2}
      height={9}
      viewBox="0 0 2 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={1.1}
        cy={8.10019}
        r={0.9}
        transform="rotate(90 1.1 8.1)"
        fill="#222"
      />
      <Circle
        cx={1.1}
        cy={4.5001}
        r={0.9}
        transform="rotate(90 1.1 4.5)"
        fill="#222"
      />
      <Circle
        cx={1.1}
        cy={0.9}
        r={0.9}
        transform="rotate(90 1.1 .9)"
        fill="#222"
      />
    </Svg>
  )
}

export default More;
