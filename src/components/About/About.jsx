import React from 'react';

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
              alt="SnapTrip Adventure"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-3xl text-gray-900 font-bold md:text-4xl">
              Discover, Snap & Go – Welcome to SnapTrip!
            </h2>
            <p className="mt-6 text-gray-700 text-lg">
              SnapTrip is your ultimate travel buddy, making spontaneous getaways and dream vacations easier, faster, and way more fun.
              Whether you're exploring iconic wonders or hidden gems, SnapTrip helps you plan and capture every moment.
            </p>
            <p className="mt-4 text-gray-600">
              From curated destinations and traveler tips to smart tools and instant inspiration, we’re here to make travel planning feel like part of the adventure.
              Snap it. Pack it. Trip it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
