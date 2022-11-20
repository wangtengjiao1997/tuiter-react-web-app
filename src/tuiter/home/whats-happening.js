import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuitThunk}
    from "../../services/tuits-thunks";


const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const currentUser = {
        "userName": "SpaceX",
        "handle": "@spacex",
        "avator": "../../images/spacex.png",
        "image": "tesla.jfif",
    };

    const templateTuit = {
        ...currentUser,
        "topic": "Space",
        "time": "2h",
        "liked": false,
        "comment": 0,
        "transfer": 0,
        "likes": 0,
        "title":"New tuit"
    }
    const tuitClickHandler = () => {
        const newTuit = {
            ...templateTuit,
            "content": whatsHappening
        }
        dispatch(createTuitThunk(newTuit))
    }
    return (
        <div className="row">
            <div className="col-auto">
                <img className={"rounded-circle"} src="/images/spacex.png" width={60} alt={"..."}/>
            </div>
            <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
                 className="form-control border-0"
                 onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}
export default WhatsHappening;