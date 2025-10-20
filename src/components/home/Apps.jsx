import React from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from './SingleApp';

const Apps = () => {
  const apps = useLoaderData();

  // FIX: Check if 'apps' is an array.
  // If it is, slice it. If not, use an empty array [].
  const visibleApps = Array.isArray(apps) ? apps.slice(0, 8) : [];

  console.log(visibleApps);

  return (
    <div className=" w-3xl md:w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* This is now safe because visibleApps is guaranteed to be an array */}
        {visibleApps.map((app) => (
          <SingleApp key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default Apps;