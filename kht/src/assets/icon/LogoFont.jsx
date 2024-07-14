import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LogoFont(props) {
  return (
    <Svg
      width={36}
      height={22}
      viewBox="0 0 36 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.06 4.203V17H.977V4.203H4.06zm7.638 0L6.741 10.69l-2.9 3.172-.563-2.83L5.133 8.22l2.76-4.017h3.805zM8.051 17l-3.305-5.766 2.4-1.766L11.698 17H8.051zm13.06-7.717v2.373h-6.565V9.283h6.565zm-5.537-5.08V17H12.49V4.203h3.085zm7.612 0V17h-3.077V4.203h3.076zm7.892 0V17h-3.085V4.203h3.085zm3.85 0v2.382H24.23V4.203h10.697z"
        fill="#03A4FF"
      />
    </Svg>
  )
}

export default LogoFont;
