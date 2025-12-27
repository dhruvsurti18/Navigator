import React from "react";

export default function Home({ employees }) {
    return (
        <div className="cards">
            {employees.map((e) => (
                <div className="card" key={e.id}>
                    <div className="profile-img-wrap">
                        <img src={e.photo} alt="profile" />
                    </div>

                    <h3>{e.name}</h3>
                    <p className="designation">{e.designation}</p>
                    <p>{e.department}</p>
                    <p className="salary">₹ {e.salary}</p>

                    <span className={e.active ? "active" : "inactive"}>
                        {e.active ? "Active" : "Inactive"}
                    </span>
                </div>
            ))}
        </div>
    );
}
