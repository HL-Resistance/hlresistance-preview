import NavigationBar from "./NavigationBar";
import React from "react";

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <NavigationBar />
            {children}
        </React.Fragment>
    )
}