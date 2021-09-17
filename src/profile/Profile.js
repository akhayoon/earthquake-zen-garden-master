import React from 'react';
import earthQuakeData from '../data/earthquakes.json';
import Field from '../common/components/Fields';
import './Profile.css';

export default function Profile() {
  const { profile } = earthQuakeData;

  return (
    <div className='container'>
      <h1>Profile</h1>
      <div className='row'>
        <div className='column'>
          <img className="avatar" src={profile.avatarImage} />
        </div>
        <div className='two-columns'>
            <div className='row'>
              <Field label='First Name' value={profile.firstName}/>
              <Field label='Last Name' value={profile.lastName}/>
              <Field label='Phone' value={profile.phone}/>
              <Field label='Email' value={profile.email}/>
              <Field label='Bio' value={profile.bio}/>
          </div>
        </div>
      </div>
    </div>
  );
}
