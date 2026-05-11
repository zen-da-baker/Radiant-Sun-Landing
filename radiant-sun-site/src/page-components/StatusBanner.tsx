"use client"

// Import styling
import "../../styles/status-banner.css";

import { useState } from "react";

export function StatusBanner( { visible, status, message } : { visible: string, status: boolean, message: string } ) {
    
    const [ visibility, setVisibility ] = useState<string>( visible );

    let statusClass = "";

    if ( status ) {

        statusClass = "success";

    } else {

        statusClass = "failure";

    }

    let classes = "status-banner " + statusClass;

    function closeBanner() {

        setVisibility( "hidden" );

    }

    const statusBannerUI = document.getElementById("status-banner");

    if ( statusBannerUI !== null ) {

        statusBannerUI.style.visibility = visibility;

    }

    return (
        <div id="status-banner" className={ classes }>

            <p>{ message }</p>

            <button onClick={ closeBanner }>X</button>

        </div>
    )

}