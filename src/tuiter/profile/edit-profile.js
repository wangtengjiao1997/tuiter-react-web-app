import React, {useState} from "react";
import {useSelector} from "react-redux";
import "./index.css";
import {useDispatch} from "react-redux";
import {editProfile} from "./profile-reducer";
import {Link} from "react-router-dom";

const EditProfile = () =>{
    const profile = useSelector(state=>state.profile);
    const dispatch = useDispatch();
    let [name, setName] = useState(profile.firstName+" "+profile.lastName);
    let [bio, setBio] = useState(profile.bio);
    let [location, setLocation] = useState(profile.location);
    let [website, setWebsite] = useState(profile.website);
    let [dateOfBirth, setBirth] = useState(profile.dateOfBirth);
    const saveClickHandler = (id) => {
        let profileData ={
            _id:id,
            name:name,
            bio:bio,
            location:location,
            website:website,
            dateOfBirth:dateOfBirth
        }
        dispatch(editProfile(profileData));
    }
    return(
        <div className={"wd-div-border"}>
            <div className={"row"}>
                <div className={"col-1 mt-2 ps-4"}>
                    <Link to={"/tuiter/profile"} className={"text-black"}>
                        <i className={"bi bi-x-lg"}></i>
                    </Link>
                </div>
                <div className={"col-8 mt-1"}>
                    <h2 className={"mb-0 wd-bigword"}>Edit profile</h2>
                </div>
                <div className={"col-3 mt-1 "}>
                    <Link to={"/tuiter/profile"} className={"black"}>
                        <button className={"rounded-pill float-end me-2 btn btn-dark "} onClick={() => saveClickHandler(profile._id)} >Save</button>
                    </Link>
                </div>
            </div>

            <div className={"mt-1"}>
                <div>
                    <img width={"100%"} height={"250px"} src={profile.image} alt={""}></img>
                </div>
                <div className={"ms-2 position-relative"} style={{"bottom":"40px"}}>
                    <img className={"rounded-circle"} src={profile.avator} width={100} alt={""}/>
                </div>
            </div>

            <div className={"ms-2"}>
                <div className="form-group">
                    <label htmlFor="inputName" className="form-label mt-4">Name</label>
                    <input type="name" className="form-control" id="inputName" value={name} onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputText" className="form-label mt-4">Bio</label>
                    <textarea type="text" className="form-control" id="inputText" value={bio} onChange={(event) => setBio(event.target.value)}/>
                </div>
            </div>

            <div className={"ms-2 mb-2"}>
                <div className="form-group">
                    <label htmlFor="inputLocation" className="form-label mt-4">Location</label>
                    <input type="text" className="form-control" id="inputLocation" value={location} onChange={(event) => setLocation(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputWebsite" className="form-label mt-4">Website</label>
                    <input type="text" className="form-control" id="inputWebsite" value={website} onChange={(event) => setWebsite(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputText" className="form-label mt-4">Birth date</label>
                    <input type="date" className="form-control" id="inputText" value={dateOfBirth} onChange={(event) => setBirth(event.target.value)}/>
                </div>
            </div>
        </div>
    );
};
export default EditProfile;