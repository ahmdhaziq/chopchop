import { Outlet } from "react-router-dom"
import Sidebar from "../components/navbar"

export default function BaseLayout() {
    return (
        <div className="base-container">
            <div className="layout-content">
                <Outlet />
            </div>
        </div>
    );
}