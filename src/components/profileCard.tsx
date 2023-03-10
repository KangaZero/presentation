import React from "react";
export interface profileCardInterface {
  name: string;
}

const ProfileCard: React.FC<profileCardInterface> = ({ name }) => {
  return (
    <div className="profile-card profile-card0">
      <div className="border">
        <h2 className="profile-title">{name}</h2>
        <div className="profile-icons">
          <i className="profile-fa fa-codepen" aria-hidden="true"></i>
          <i className="profile-fa fa-instagram" aria-hidden="true"></i>
          <i className="profile-fa fa-dribbble" aria-hidden="true"></i>
          <i className="profile-fa fa-twitter" aria-hidden="true"></i>
          <i className="profile-fa fa-facebook" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
