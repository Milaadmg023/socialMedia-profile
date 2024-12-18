import { useState } from "react";
import {
  UserCircle,
  MapPin,
  Calendar,
  Users,
  Image,
  MessageCircle,
  Heart,
  Share2,
} from "lucide-react";

const App = () => {
  const [editModal, setEditModal] = useState(false);
  function toggleEditModal() {
    setEditModal(!editModal);
  }
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        {/* Cover Photo */}
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500"></div>

        {/* Profile Information */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
          <div className="sm:flex sm:items-end sm:space-x-5">
            <div className="relative group">
              <img
                className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                src="https://avatars.githubusercontent.com/u/132762516?v=4"
                alt="Profile"
              />
              <div className="absolute inset-0 rounded-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <UserCircle className="h-12 w-12 text-white" />
              </div>
            </div>
            <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
                <h1 className="text-2xl font-bold text-gray-900 truncate">
                  Sarah Connor
                </h1>
                <p className="text-sm text-gray-500">@sarahconnor</p>
              </div>
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button
                  type="button"
                  onClick={toggleEditModal}
                  className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
          <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
            <h1 className="text-2xl font-bold text-gray-900 truncate">
              Sarah Connor
            </h1>
          </div>
        </div>

        {/* Bio and Stats */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Bio</dt>
              <dd className="mt-1 text-sm text-gray-900">
                Saving the future, one day at a time. AI enthusiast and robot
                skeptic.
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Location</dt>
              <dd className="mt-1 text-sm text-gray-900 flex items-center">
                <MapPin className="h-4 w-4 mr-1" /> Los Angeles, CA
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Joined</dt>
              <dd className="mt-1 text-sm text-gray-900 flex items-center">
                <Calendar className="h-4 w-4 mr-1" /> August 29, 1997
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Connections</dt>
              <dd className="mt-1 text-sm text-gray-900 flex items-center">
                <Users className="h-4 w-4 mr-1" /> 1.2M followers · 42 following
              </dd>
            </div>
          </dl>
        </div>

        {/* Recent Posts */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Posts
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((post) => (
              <div key={post} className="bg-white shadow rounded-lg p-4">
                <p className="text-sm text-gray-800 mb-2">
                  Just another day fighting Skynet. Remember, the future is not
                  set. There is no fate but what we make for ourselves.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex space-x-4">
                    <span className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" /> 1.5K
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" /> 284
                    </span>
                    <span className="flex items-center">
                      <Share2 className="h-4 w-4 mr-1" /> 56
                    </span>
                  </div>
                  <span>2 hours ago</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${editModal ? "flex flex-col" : "hidden"} items-center p-3 border rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white`}>
        <div>
          <label htmlFor="take_photo" className="cursor-pointer">Take a photo</label>
          <input type="file" name="photo" id="take_photo" className="hidden"/>
        </div>
        ----------
        <div>
          <label htmlFor="choose_photo" className="cursor-pointer ">Choose from gallery</label>
          <input type="file" name="photo" id="choose_photo" className="hidden"/>
        </div>
      </div>
    </>
  );
};

export default App;
