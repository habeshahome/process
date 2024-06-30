import { Drawer, DrawerProps } from "@mui/material"
import { ReactNode } from "react"

interface SideBarInterface extends DrawerProps {
    open: boolean
    children: ReactNode
}

export const SideBar = (props: SideBarInterface) => {
    const { children, open, ...rest } = props

    return (
        <>
            <Drawer open={open} anchor="left" {...rest}>
                {children}
            </Drawer>
        </>
    )
}