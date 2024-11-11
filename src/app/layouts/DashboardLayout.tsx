import React, { useState } from "react";
import { Outlet } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import sidebarStyles from "./SidebarWrapper.module.css"
import viewWrapperStyles from "./MainContentWrapper.module.css"
import Sidebar from "../components/sidebar/Sidebar"


// Definisikan tipe untuk props yang diterima Toolbar
interface ToolbarProps {
    toggleSidebar: () => void;
}
        
const Toolbar: React.FC<ToolbarProps> = ({ toggleSidebar }) => {
    const [checked, setChecked] = useState(false);

    return (
        <div className="flex align-items-center justify-content-between w-full">
            <div className="flex align-items-center justify-content-start">
                <i className="pi pi-bars cursor-pointer mr-3 text-xl" onClick={toggleSidebar}></i>
                <div className="text-xl font-semibold">Dashboard</div>
            </div>
            <div className="flex flex-wrap align-items-center justify-content-center cursor-pointer border-round-lg p-2 bg-gray-200 w-2rem h-2rem" onClick={() => setChecked(!checked)}>
                {
                    checked ? <i className="pi pi-moon"></i> : <i className="pi pi-sun"></i>
                }
            </div>
        </div>
    )
}

const DashboardLayout : React.FC = () => {

    const [sidebarIsActive, setSidebarIsActive] = useState<boolean>(true);

    return <Fragment>
        <div className="flex" style={{ maxWidth: '100%', height: '100%', }}>
            <div className={`${sidebarStyles.sidebar} ${sidebarIsActive ? '' : sidebarStyles.hidden} bg-gray-50`}>
                <Sidebar/>
            </div>
            <div className={`${viewWrapperStyles.viewWrapper} h-full w-full`}>
                <div className="flex align-items-center mb-3 h-4rem px-5 py-4 sticky top-0 bg-white">
                    <Toolbar toggleSidebar={() => setSidebarIsActive(!sidebarIsActive)}/>
                </div>
                <div className="px-5 my-5">
                    <Outlet />
                </div>
            </div>
        </div>
    </Fragment>
}

export default DashboardLayout