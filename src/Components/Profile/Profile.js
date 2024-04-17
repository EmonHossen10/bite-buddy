"use Client";
import Image from "next/image";


const Profile = () => {
  return (
    <div>
      <div
        className="hero min-h-screen bg-gradient-to-r from-[#eceaea] to-[#ffffff] shadow-xl 
        rounded-xl py-4"
      >
        <div className="hero-content flex-col lg:flex">
         <h1 className="text-5xl font-bold text-gray-600">Profile!</h1>
          <div className="text-center">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <Image src="https://i.ibb.co/61fkXjD/Ema-Watt.jpg"
                   width={96} height={96} alt="profile"  />
              </div>
            </div>
          </div>
          <div className="card shrink-0 w-full">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Street Address</span>
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  placeholder="Street Address"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="md:flex mb-1">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Postal Code</span>
                  </label>

                  <label className="input-group">
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="postal code"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>

                <div className="form-control md:w-1/2 md:ml-4">
                  <label className="label">
                    <span className="label-text">City</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Country</span>
                </label>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mt-3">
                <input
                  className="btn btn-primary bg-gradient-to-r from-[#FF8436] to-[#FF0A04] 
                    border-transparent text-[20px]"
                  type="submit"
                  value="Save"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
