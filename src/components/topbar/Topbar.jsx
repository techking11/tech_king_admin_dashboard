import "./topbar.css"
import {
    NotificationsNone,
    Language,
    Settings
} from '@mui/icons-material/'

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
            <span className="logo">Admin</span>
        </div>
        <div className="topRight">
            <div className="topbarIconContainer">
                <NotificationsNone />
                <span className="topIconBag">2</span>
            </div>
            <div className="topbarIconContainer">
                <Language />
                <span className="topIconBag">2</span>
            </div>
            <div className="topbarIconContainer">
                <Settings />
            </div>
            <img src="https://media.istockphoto.com/id/1375264815/photo/beautiful-afro-woman.jpg?b=1&s=170667a&w=0&k=20&c=V052sAKDF76elxBGk2ozB0hxafANXLjVmBNKFfPTdTY=" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}