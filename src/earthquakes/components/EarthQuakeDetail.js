/* eslint-disable arrow-body-style */
import React from 'react';
import { useParams } from 'react-router-dom';
import earthQuakeData from '../../data/earthquakes.json';
import Field from '../../common/components/Fields';
import formatTime from '../../common/utils/formatTime';
import './EarthQuakeDetail.css';

export default function EarthQuakeDetail() {
  const { id } = useParams();
  const detail = earthQuakeData.data.features.find((earthquake) => earthquake.id === id);

  return (
    <div className="detail-container">
      <h3>{detail.properties.place}</h3>
      <Field label="Title" value={detail.properties.title} />
      <Field label="Magnititude" value={detail.properties.mag} />
      <Field label="Time" value={formatTime(detail.properties.time)} />
      <Field label="Status" value={detail.properties.status} />
      <Field label="Tsunami" value={detail.properties.tsunami} />
      <Field label="Type" value={detail.properties.type} />
    </div>
  );
}
