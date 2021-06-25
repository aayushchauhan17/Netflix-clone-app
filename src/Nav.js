import React, { useState, useEffect } from 'react'
import logo from './netflix-logo.png';
import './nav.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';
import profileNEtflix from './profile_netflix.png'


const Nav = () => {
    const [showsearch, setShowsearch] = useState("block");
    const [showinput, setShowinput] = useState("none");
    const [shownavbg, setshownavbg] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setshownavbg(true);
            }
            else setshownavbg(false);
        })
        return ()=>{
            window.removeEventListener("scroll");
        };
    }, [])


    const search = () => {
        setShowsearch("none");
        setShowinput("block");
    }

    const searchstyle = {
        display: showsearch,
        width: "28px",
        height: "28px"
    }
    const inputstyle = {
        display: showinput,
        width: "23vh",
        padding: "5px",
        background: "rgba(51, 51, 51, 0.5)",
        color: "rgb(221, 219, 219)",
        outline: "none",
        border: "0px",
        fontSize: "1rem",
    }

    return (
        <div className={`navbar ${shownavbg && "navbar_black"}`}>
            <div className="navbar1">
                <img src={logo} style={{ width: "95px", height: "35px" }} alt="Loading.." />
                <ul className="nav_list">
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                </ul>
            </div>
            <div className="nav_right">
                <SearchOutlinedIcon onClick={search} className="nav_right_icon" style={searchstyle} />
                <input type="Search" style={inputstyle} placeholder="Title, People, Geans" />
                <NotificationsIcon className="nav_right_icon" style={{ width: "28px", height: "28px", margin: "0px 20px" }} />
                <img src={profileNEtflix} alt="Loading..." style={{ width: "28px", height: "28px", cursor: "pointer" }} />
            </div>
        </div>
    )
}

export default Nav
