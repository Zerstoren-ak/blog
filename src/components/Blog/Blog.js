import React from "react";
import Navbar from "./Navbar/Navbar";
import Feed from "./Feed/Feed";
import PostCreate from "./PostCreate/PostCreate";
import PersonalAccount from "./PersonalAccount/PersonalAccount";

function Blog() {
    return(
        <>
            <Navbar/>
            {/*<Feed/>*/}
            <PostCreate/>
        </>
    )
}

export default Blog