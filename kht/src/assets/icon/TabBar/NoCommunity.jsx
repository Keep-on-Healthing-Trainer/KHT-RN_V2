import * as React from "react"
import Svg, { Path } from "react-native-svg"

function NoCommunity(props) {
  return (
    <Svg
      width={48}
      height={40}
      viewBox="0 0 48 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.8 12h.007m3.186 0H24m3.193 0h.007"
        stroke="#A1A1AA"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M24 20a8 8 0 10-8-8c0 1.28.3 2.49.834 3.562.143.285.19.61.108.919l-.476 1.78a1.04 1.04 0 001.272 1.274l1.781-.477c.31-.077.636-.04.92.107A7.967 7.967 0 0024 20z"
        stroke="#A1A1AA"
        strokeWidth={1.3}
      />
      <Path
        d="M11.088 27.088v10.848H9.84v-5.568H7.56v-1.02h2.28v-4.26h1.248zm-3.492 1.08c0 .816-.072 1.6-.216 2.352a7.492 7.492 0 01-2.256 4.068c-.624.592-1.416 1.136-2.376 1.632l-.672-.96c.92-.48 1.672-.996 2.256-1.548a6.121 6.121 0 001.356-1.848l-3.384.312-.18-1.056 3.948-.24a9.52 9.52 0 00.18-.828c.056-.28.092-.572.108-.876H2.688v-1.008h4.908zm14.147 3.756H14.34V27.64h7.404v4.284zm-1.224-3.3h-4.956v2.316h4.956v-2.316zm2.448 5.628h-2.376v3.732h-1.224v-3.732h-2.592v3.732H15.54v-3.732h-2.4v-.996h9.828v.996zm10.175-7.164v10.836h-1.236V27.088h1.236zm-7.092 7.044c.776-.008 1.56-.048 2.352-.12.8-.072 1.636-.196 2.508-.372l.132 1.032c-.944.192-1.852.328-2.724.408-.864.072-1.72.108-2.568.108h-.924v-7.044h1.224v5.988zm18.12-7.056v10.86h-1.237v-10.86h1.236zM37.1 34.384c.448 0 .872-.004 1.272-.012.408-.016.8-.036 1.176-.06.384-.024.76-.056 1.128-.096.376-.04.76-.092 1.152-.156l.12.996c-.424.072-.84.132-1.248.18-.4.04-.808.072-1.224.096-.416.024-.848.04-1.296.048-.44.008-.912.012-1.416.012h-.9v-7.368h5.352v1.02h-4.116v2.016h3.696v.996h-3.696v2.328z"
        fill="#A1A1AA"
      />
    </Svg>
  )
}

export default NoCommunity;
