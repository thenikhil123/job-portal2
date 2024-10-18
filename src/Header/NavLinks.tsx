
import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
    const links = [
        { name: "Find Job", url: "find-jobs" },
        { name: "Find Talent", url: "find-talent" },
        { name: "Upload Job", url: "upload-jobs" },
        { name: "About us", url: "about" },
    ]

    const location = useLocation();
    return <div className="flex gap-5 items-center text-mine-shaft-300">

        {/* {links.map((link, index) =>( 
            
        //     <div
        //     key={index}
        //      className={`${location.pathname === "/" + link.url ? "border-bright-sun-400 text-bright-sun-400" : "border-transparent"} border-t-[3px] h-full flex items-center'}>
        //     <Link to={link.url}>{link.name}</Link>
        // </div>))} */}


        {links.map((link, index) => (
            <div
               
                className={`${location.pathname === "/" + link.url ? "border-bright-sun-400 text-bright-sun-400" : "border-transparent"} border-t-[3px] h-full flex items-center`}
            >
                <Link  key={index} to={link.url}>{link.name}</Link>
            </div>
        ))}


    </div>

}
export default NavLinks;