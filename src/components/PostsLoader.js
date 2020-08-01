import React from "react"
import ContentLoader from "react-content-loader"

const PostsLoader = (props) => (
    <ContentLoader
        speed={2}
        width={300}
        height={150}
        viewBox="0 0 300 150"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >

        <rect x="59" y="74" rx="3" ry="3" width="88" height="6" />
        <rect x="57" y="93" rx="3" ry="3" width="52" height="6" />
        <rect x="9" y="2" rx="3" ry="3" width="410" height="6" />
        <rect x="10" y="19" rx="3" ry="3" width="410" height="6" />
        <rect x="11" y="36" rx="3" ry="3" width="380" height="6" />
        <rect x="14" y="53" rx="3" ry="3" width="178" height="6" />
        <circle cx="27" cy="89" r="20" />
    </ContentLoader>
)

export default PostsLoader