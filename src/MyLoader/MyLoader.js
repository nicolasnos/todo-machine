import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={600}
    height={380}
    viewBox="0 0 200 150"
    backgroundColor="#07a1e4"
    foregroundColor="#42d9ff"
    {...props}
  >
    <circle cx="12" cy="22" r="10" /> 
    <rect x="31" y="16" rx="5" ry="5" width="600" height="13" /> 
    <circle cx="12" cy="60" r="10" /> 
    <rect x="31" y="54" rx="5" ry="5" width="600" height="13" /> 
    <circle cx="12" cy="98" r="10" /> 
    <rect x="39" y="92" rx="5" ry="5" width="600" height="13" /> 
    <circle cx="12" cy="137" r="10" /> 
    <rect x="31" y="130" rx="5" ry="5" width="600" height="13" />
  </ContentLoader>
)

export {MyLoader}