import { Avatar, Indicator, NavLink } from "@mantine/core";
import { IconBell, IconEyeSearch, IconGlobe, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";

const Header = () => {
    return <div className="w-full px-6 text-white bg-mine-sha h-20 flex justify-between items-center  bg-mine-shaft-950 ">

        {/* Logo and Ti */}
        <div className="flex gap-5 items-center text-bright-sun-400">
            <IconGlobe className="h-14 w-14" stroke={2} />
            <div className="text-3xl font-semibold font-sans">Jobster</div>
           </div>


        {/* NavLinks */}
        {NavLinks()}


        {/* Profile */}
        <div className="flex gap-3 items-center">

            <div className="flex gap-2 items-center">
                <div>Nikhil Gupta</div>
                <Avatar src="kk.png" alt="it's me" />
            </div>


            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <IconSettings stroke={1.25} />
            </div>

            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <Indicator color="brightSun.4" size={8} offset={6} processing>

                    <IconBell stroke={1.25} />
                </Indicator>
            </div>

        </div>

    </div>
}
export default Header;