import React from "react"
import ContentLoader from "react-content-loader"

export const Preloader = () => (
    <ContentLoader
        speed={1}
        width={320}
        height={621}
        viewBox="0 0 320 621"
        backgroundColor="#0f1016"
        foregroundColor="#171923"
    >
        <rect x="56" y="430" rx="10" ry="10" width="208" height="48" />
        <rect x="16" y="-58" rx="2" ry="2" width="288" height="425" />
        <rect x="20" y="384" rx="0" ry="0" width="280" height="16" />
    </ContentLoader>
)