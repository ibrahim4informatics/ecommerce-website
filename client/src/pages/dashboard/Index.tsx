import { Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";

import SideBar from "@/components/ui/custom/dashboard/SideBar";
import { Outlet, useMatch } from "react-router-dom";



const Index: React.FC = () => {
    const root = useMatch("/dashboard");
    return (
        <Grid bg={"white"} templateColumns={"repeat(4,1fr)"} h={"100vh"} color={"black"}>

            <SideBar />



            <GridItem p={4} colSpan={3} h={"100vh"} overflowY={"auto"}>
                {/* <Heading>Hello widgets</Heading>
                <Outlet/> */}

                {root ? (
                    <>
                        <Heading>Hello widgets</Heading>
                    </>
                ) : <Outlet />}
            </GridItem>
        </Grid>
    )
}

export default Index;