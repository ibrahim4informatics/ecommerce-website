import { Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";

import SideBar from "@/components/ui/custom/dashboard/SideBar";



const Index: React.FC = () => {
    return (
        <Grid bg={"white"} templateColumns={"repeat(4,1fr)"} h={"100vh"} color={"black"}>
            
            <SideBar/>



            <GridItem p={4} colSpan={3} h={"100vh"} overflowY={"auto"}>
                <Heading>Hello widgets</Heading>
            </GridItem>
        </Grid>
    )
}

export default Index;