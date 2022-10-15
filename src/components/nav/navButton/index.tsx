import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import React from "react";

export default function NavButton(props: {link: string, className?: string, children?: React.ReactNode}) {
    const navigate = useNavigate();

    function navHandle() {
        navigate(props.link);
    }

    return (
        <Button className={props.className} onClick={navHandle}>{props.children}</Button>
    )
}