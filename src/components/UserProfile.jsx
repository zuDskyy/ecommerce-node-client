import { Avatar } from '@material-ui/core';
import React from 'react'
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { PopupMenu } from "react-simple-widgets";
import { logout } from '../redux/apiCalls';
import '../styles/userprofile.scss'

const UserProfile = ({userProf}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    
   const handleLogout = (e) => {
       e.preventDefault();
      logout(dispatch);
      navigate('/login');
   }
  return (
    
       <div id="userProfileApp">
      <div className="text-end">
        <PopupMenu>
          <div>
            <Avatar  alt={userProf.username}
             src={userProf.img || ""}
               sx={{ width: 56, height: 56 }}/>
               
          </div>

          <div className="userProfileCard text-start">
            <div className="userProfileCard-body px-4 py-4">
              <div id="userProfileCircle-avatar" className="text-center mx-auto ">
                <img src={userProf.img}  alt=""/>
              </div>

              <h5 className="text-center mb-0">{userProf.username}</h5>
              <p className="text-center mb-2">{userProf.email}</p>

              <hr />

              <p
                className="mb-0"
                style={{ color: "#bebebe", fontWeight: "bold", fontSize: 12 }}
              >
                ROLES
              </p>
              <p style={{ fontSize: 12 }}>
                {["Submitter", "Project manager", "Change control board"].join(
                  ", "
                )}
              </p>

              <hr className="mb-0" style={{ margin: "0 -24px 0" }} />

              <div
                className="list-group list-group-flush"
                style={{ margin: "0 -24px 0" }}
              >
                <button className="list-group-item list-group-item-action px-4">
                  <small>Change Requests</small>
                </button>
                <button className="list-group-item list-group-item-action px-4">
                  <small>Pending Requests</small>
                </button>
                <button className="list-group-item list-group-item-action px-4">
                  <small>Other Requests</small>
                </button>
              </div>

              <hr style={{ margin: "0 -24px 24px" }} />

              <div className="d-grid">
                <button onClick={handleLogout} className="btn btn-secondary">
                  <small>Logout</small>
                </button>
              </div>
            </div>
          </div>
        </PopupMenu>
      </div>
    </div>
    
  )
}

export default UserProfile
