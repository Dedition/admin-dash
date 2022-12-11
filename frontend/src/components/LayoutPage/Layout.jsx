import { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../NavbarPage/Navbar";
import Sidebar from "../SidebarPage/Sidebar";
import { useGetUserQuery } from "state/api";

const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);
    const userId = useSelector((state) => state.global.userId);


    return (
        <Box width="100%" height="100%" display={isNonMobile ? "flex" : "block"}>
            <Sidebar
                isNonMobile={isNonMobile}
                drawerWidth="250px"
                isSideBarOpen={isSideBarOpen}
                setIsSideBarOpen={setIsSideBarOpen}
            />
            <Navbar
                isSideBarOpen={isSideBarOpen}
                setIsSideBarOpen={setIsSideBarOpen}
            />
            <Outlet />
        </Box>
    )
}

export default Layout;
