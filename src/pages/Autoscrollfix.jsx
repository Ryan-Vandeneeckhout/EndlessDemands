import { useEffect } from "react";

export const AutoScrollfix = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    })
}

