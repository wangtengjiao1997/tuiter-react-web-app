import React, {useState} from "react";
import {useSelector} from "react-redux";
import "./index.css";
import {Link} from "react-router-dom";

const Profile = () =>{
    const profile = useSelector(state=>state.profile);
    return(
        <div className={"wd-div-border"}>
            <div className={"row"}>
                <div className={"col-1 mt-2 ps-3"}>
                    <Link to={"/tuiter/home"} className={"text-black"}>
                        <i className={"fa fa-arrow-left fa-2x "} ></i>
                    </Link>
                </div>
                <div className={"col-10"}>
                    <h2 className={"mb-0 wd-bigword"}>{profile.firstName} {profile.lastName}</h2>
                    <h3 className={"wd-smallword wd-gray"}>{profile.tweets} Tweets</h3>
                </div>
            </div>
            <div>
                <div>
                    <img width={"100%"} height={"250px"} src={profile.image}></img>
                </div>
                <div className={"ms-2 position-relative"} style={{"bottom":"40px"}}>
                    <img className={"rounded-circle"} src={profile.avator} width={100}/>
                    <Link to={"/tuiter/edit-profile"}>
                        <button className={"rounded-pill position-absolute me-2 btn btn-outline-secondary"} style={{"right":"0px","bottom":"15px"}}>Edit profile</button>
                    </Link>
                </div>
            </div>
            <div className={"ms-2"}>
                <h2 className={"wd-bigword mb-0"}>{profile.firstName} {profile.lastName}</h2>
                <h3 className={"wd-smallword wd-gray mb-3"}>{profile.handle}</h3>
                <p className={"wd-smallword"}>{profile.bio}</p>
            </div>
            <div className={"ms-2 row"}>
                <ul className="list-inline row mb-2">
                    <li className="col flex-row ">
                        <i className="fa fa-map-marker wd-color-gray"/>
                        <span className={`wd-color-gray ms-1`}>{profile.location}</span>
                    </li>
                    <li className="col flex-row ">
                        <i className="fa fa-birthday-cake wd-color-gray"/>
                        <span className={`wd-color-gray ms-1`}>{profile.dateOfBirth}</span>
                    </li>
                    <li className="col flex-row ">
                        <i className="fa fa-calendar wd-color-gray"/>
                        <span className={`wd-color-gray ms-1`}>{profile.dateJoined}</span>
                    </li>
                </ul>
                <ul className="list-inline row">
                    <li className="col flex-row ">
                        <span className={`wd-color-gray ms-1 `}>{profile.followingCount} Following</span>
                    </li>
                    <li className="col flex-row ">
                        <span className={`wd-color-gray ms-1`}>{profile.followersCount} Followers</span>
                    </li>
                    <li className="col flex-row ">
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Profile;