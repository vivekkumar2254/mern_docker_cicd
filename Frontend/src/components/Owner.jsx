import React from 'react';

const OwnerProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 md:p-8">
          {/* Avatar and Basic Info */}
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="flex flex-col items-center md:items-start gap-4">
              {/* Avatar */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src=""
                  alt="Owner Avatar"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Name and Title */}
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-800">Mr Anurag Singh</h1>
                <p className="text-lg text-gray-600">Business Owner</p>
              </div>
              {/* Badges */}
              <div className="flex gap-2 mt-2">
                <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">LIC Agent</span>
                <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">Health care</span>
              </div>
            </div>
            {/* Bio and Contact Information */}
            <div className="flex-1 space-y-4">
              <p className="text-gray-700 leading-relaxed">
              An LIC (Life Insurance Corporation) agent is a licensed representative who helps individuals and businesses purchase life insurance policies and other financial products offered by LIC of India. Their main role is to advise clients on suitable insurance policies based on their financial needs and life goals. Here are some key responsibilities and details about an LIC agent:
              </p>
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="material-icons">email:</span>
                  <span>Anuragsingh43@gmail.com</span>
                </div>
                <br/>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="material-icons">phone:</span>
                  <span>9140418851</span>
                </div>
               
              </div>
              {/* About Business */}
              
              {/* Buttons */}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerProfile;
