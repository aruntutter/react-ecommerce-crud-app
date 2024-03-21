import { useContext } from "react";
import "./UserDetail.css";
import myContext from "../../../context/myContext";

const UserDetail = () => {
  const context = useContext(myContext);
  const { getAllUser } = context;

  return (
    <div className="user-detail">
      <div className="user-detail-head">
        <h4>All Users</h4>
      </div>
      {/* Table */}
      <div className="user-detail-container">
        <div className="user-detail-table-wrapper">
          {/* table  */}
          <table className="user-detail-table">
            <thead>
              <tr>
                <th className="user-detail-custom-th">S.No</th>
                <th className="user-detail-custom-th">Name</th>
                <th className="user-detail-custom-th">Email</th>
                <th className="user-detail-custom-th">UID</th>
                <th className="user-detail-custom-th">Role</th>
                <th className="user-detail-custom-th">Date</th>
              </tr>
            </thead>
            {/* tbody */}
            <tbody>
              {getAllUser.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td className="user-detail-uid">{item.uid}</td>
                    <td>{item.role}</td>
                    <td>{item.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
