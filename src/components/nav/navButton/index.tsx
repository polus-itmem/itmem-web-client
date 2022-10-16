import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import React from "react";

export default function NavButton({link, className, children}:
                                      { link: string, className?: string, children?: React.ReactNode }) {
    const navigate = useNavigate();

    function navHandle() {
        navigate(link);
    }

    return (
        <Button className={className} onClick={navHandle}>{children}</Button>
    )
}
