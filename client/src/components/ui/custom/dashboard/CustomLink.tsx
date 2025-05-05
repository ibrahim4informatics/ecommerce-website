import { Box } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
    to:string
    placeholder:string,
    icon?:React.ReactNode
}

const CustomLink: React.FC<Props> = ({placeholder, to, icon}) => {
    return (
        <Box zIndex={1} pos={"relative"} display={"flex"} alignItems={"center"} gap={2} color={"black"} my={4}>
                {icon}
                <NavLink to={to}>{placeholder}</NavLink>
            </Box>
    )
}

export default CustomLink;