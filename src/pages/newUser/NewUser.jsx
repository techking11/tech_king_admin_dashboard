import "./newuser.css"
export default function NewUser() {
  return (
    <div className='newUser'>
      <h1 className="newUsertitle">New User</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
            <label>Username</label>
            <input type="text" name="" id="" placeholder="john" />
        </div>
        <div className="newUserItem">
            <label>Full Name</label>
            <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
            <label>Password</label>
            <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
            <label>Phone</label>
            <input type="password" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
            <label>Address</label>
            <input type="password" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
                <input type="radio" name="gender" id="Male" value="male" />
                <label htmlFor="Male">Male</label>

                <input type="radio" name="gender" id="Female" value="female" />
                <label htmlFor="Female">Female</label>

                <input type="radio" name="gender" id="Other" value="other" />
                <label htmlFor="Other">Other</label>
            </div>
        </div>
        <div className="newUserItem">
            <label htmlFor="">Active</label>
            <select name="active" id="active" className="newUserSelect">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  )
}
