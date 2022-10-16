import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import React from "react";
import {authApi} from "../../../api";

export default function ExitButton({link, callback, className, children}:
                                      { link: string, callback?: () => void, className?: string, children?: React.ReactNode }) {
    const navigate = useNavigate();

    function navHandle() {
        if (callback != null) {
            callback();
        }
        authApi.exit().then(() => navigate(link));
    }

    return (
        <Button className={className} onClick={navHandle}>{children}</Button>
    )
}
