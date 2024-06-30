import { Tab, Tabs } from "@mui/material"

export const SubHeader = () => {
    function handleTabChange() {
        console.log("tab change")
    }
    return (
        <>
            <Tabs value='' onChange={handleTabChange}>
                <Tab label="Documents" />
                <Tab label="sFiles" />
            </Tabs>
        </>
    )
} 