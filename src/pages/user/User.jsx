import { Link } from "react-router-dom";
import "./user.css"
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish
} from '@mui/icons-material';

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src="https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                    <span className="userShowUsername">Anna Becker</span>
                    <span className="userShowUserTitle">Software Engineer</span>
                </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfor">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInforTitle">annabeck99</span>
              </div>
              <div className="userShowInfor">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInforTitle">10.12.1999</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfor">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInforTitle">+1 123 456 67</span>
              </div>
              <div className="userShowInfor">
                <MailOutline className="userShowIcon" />
                <span className="userShowInforTitle">annabeck99@gmail.com</span>
              </div>
              <div className="userShowInfor">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInforTitle">New York | USA</span>
              </div>
            </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" className="userUpdateInput" placeholder="annabeck99" />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" className="userUpdateInput" placeholder="Anna Becker" />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="email" className="userUpdateInput" placeholder="annabeck99@gmail.com" />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" className="userUpdateInput" placeholder="+1 123 456 67" />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" className="userUpdateInput" placeholder="New York | USA" />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="userUpdateImg" />
                <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                <input type="file" name="" id="file" style={{display : 'none'}} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
