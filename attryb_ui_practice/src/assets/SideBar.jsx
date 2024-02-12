import React from 'react';
import { Sidebar } from '@attrybtech/attryb-ui';


const SideBar = () => {
    const handleSupportCallback = () => {
        window.open('https://attryb.com', '_blank');
    }
    return (
        <Sidebar
            sideBarHeaderData={{
                sideBarHeaderTitle: "Web Personalization",
                sideBarLogo: "",
            }}

            sidebarData={[
                {
                    _id: "1",

                    title: "Dashboard",

                    route: "#",

                    asset: "",
                },

                {
                    _id: "2",

                    title: "Use Cases",

                    route: "/use-cases",

                    asset: "",
                    isDisabled: true,
                },

                {
                    _id: "3",

                    title: "Segments",

                    route: "/segments",

                    asset: "",
                },
                {
                    _id: "88",

                    title: "Audiences",

                    route: "/audience",

                    asset: "",

                    subItems: [
                        {
                            _id: "881",

                            title: "Find People",

                            route: "people",

                            asset: ""
                        },
                        {
                            _id: "882",

                            title: "Pre-Built Segments",

                            route: "segments",

                            asset: "",
                        }
                    ]
                },
                {
                    _id: "4",

                    title: "Pages",

                    route: "#",

                    asset: "",
                },

                {
                    _id: "5",

                    title: "Campaigns",

                    route: "#",

                    asset: "",
                },

                {
                    _id: "6",

                    title: "Template Library",

                    route: "#",

                    asset: "",
                },

                {
                    _id: "7",

                    title: "Brand Kit",

                    route: "#",

                    asset: "",
                },

                {
                    _id: "8",

                    title: "Analytics",

                    route: "#",

                    asset: "",
                    subItems: [
                        {
                            _id: "881",

                            title: "Find People",

                            route: "people",

                            asset: ""
                        },
                        {
                            _id: "882",

                            title: "Pre-Built Segments",

                            route: "segments",

                            asset: "",
                        }
                    ]
                },
            ]}
            handleItemOnClick={() => { }}
            supportCallback={handleSupportCallback}
        />
    )
}

export default SideBar;