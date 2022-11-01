import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <div className="list-group-item fa fa-shirt">
                <i className="fa fa-cab me-3 col-1 " aria-hidden="true"></i><span
                className="col-10 d-none d-xl-inline">Tuiter</span></div>
            <Link to={"/tuiter/home"} className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="fa fa-home me-3 col-1" aria-hidden="true"></i><span
                className="col-10 d-none d-xl-inline">Home</span>
            </Link>
            <Link to={"/tuiter/explore"} className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <i className="fa fa-hashtag me-3 col-1" aria-hidden="true"></i><span
                className="col-10 d-none d-xl-inline">Explore</span>
            </Link>
            <Link to="/" className="list-group-item">
                <i className="fa fa-hashtag me-3 col-1" aria-hidden="true"></i><span
                className="col-10 d-none d-xl-inline">Labs</span>
            </Link>
            <div className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="fa fa-bell me-3 col-1" aria-hidden="true"></i><span
                className="col-10 d-none d-xl-inline">Notification</span>
            </div>
            <div className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="fa fa-envelope me-3 col-1" aria-hidden="true"></i><span
                className="col-10 d-none d-xl-inline">Message</span>
            </div>
            <div className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="fa fa-bookmark me-3 col-1" aria-hidden="true"></i><span
                className="col-10 d-none d-xl-inline">Bookmark</span>
            </div>
            <div className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="fa fa-list me-3 col-1" aria-hidden="true"></i><span
                className="col-10 d-none d-xl-inline">Lists</span>
            </div>
            <Link to={"/tuiter/profile"} className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <i className="fa fa-user me-3 col-1" aria-hidden="true"></i><span
                className="col-10 d-none d-xl-inline">Profile</span>
            </Link>
            <div className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="fa fa-ellipsis-h me-3 col-1" aria-hidden="true"></i><span
                className="col-10 d-none d-xl-inline">More</span>
            </div>
        </div>

    )
};
export default NavigationSidebar;