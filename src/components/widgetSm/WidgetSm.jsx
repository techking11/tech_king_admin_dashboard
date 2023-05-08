import "./widgetsm.css"
import { Visibility } from "@mui/icons-material"

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
            <img src="https://images.unsplash.com/photo-1522307837370-cc113a36b784?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYXV0aWZ1bCUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">
                    Anna Keller
                </span>
                <span className="widgetSmUserTitle">
                    Software Engineer
                </span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">
                    Beauty
                </span>
                <span className="widgetSmUserTitle">
                    Web Developer
                </span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">
                    Lady
                </span>
                <span className="widgetSmUserTitle">
                    Software Manager
                </span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src="https://images.unsplash.com/photo-1517630800677-932d836ab680?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">
                    Honey Daw
                </span>
                <span className="widgetSmUserTitle">
                    Mobile Developer
                </span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">
                    Mora Domh
                </span>
                <span className="widgetSmUserTitle">
                    NodeJS Developer
                </span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
            </button>
        </li>
      </ul>
    </div>
  )
}
