import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { assets, jobsApplied } from "../assets/assets";
import moment from "moment";

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);
  return (
    <>
      <Navbar />
      <div className="container px-4 min-h-[64vh] 2xl:px-20 mx-auto my-10">
        <h2 className="text-xl font-semibold">Your Resume</h2>
        <div className="flex gap-2 mb-6 mt-3">
          {isEdit ? (
            <>
              <label
                className="flex cursor-pointer items-center"
                htmlFor="resumeUpload"
              >
                <p className="mr-2 bg-blue-100 text-blue-500 px-4 py-2 rounded">
                  Select Resume
                </p>
                <input
                  id="resumeUpload"
                  onChange={(e) => setResume(e.target.files[0])}
                  type="file"
                  hidden
                  accept="application/pdf"
                />
                <img src={assets.profile_upload_icon} alt="" />
              </label>
              <button
                onClick={() => setIsEdit(false)}
                className="bg-green-100 border border-green-500 px-4 py-2 rounded"
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <a
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded"
                href=""
              >
                Resume
              </a>
              <button
                onClick={() => setIsEdit(true)}
                className="text-gray-500 border border-gray-300 px-4 py-2 rounded"
              >
                Edit
              </button>
            </div>
          )}
        </div>

        <h2 className="text-xl font-semibold mb-4">Applied Jobs</h2>
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b text-left">Company</th>
              <th className="py-3 px-4 border-b text-left">Job Title</th>
              <th className="py-3 px-4 border-b text-left max-sm:hidden">
                Location
              </th>
              <th className="py-3 px-4 border-b text-left max-sm:hidden">
                Date
              </th>
              <th className="py-3 px-4 border-b text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobsApplied.map((job, index) =>
              true ? (
                <tr key={index}>
                  <td className="py-3 px-4 flex items-center border-b gap-2">
                    <img className="w-8 h-8" src={job.logo} alt="" />
                    {job.company}
                  </td>
                  <td className="py-2 px-4 border-b text-sm lg:text-base">
                    {job.title}
                  </td>
                  <td className="py-2 px-4 border-b max-sm:hidden">
                    {job.location}
                  </td>
                  <td className="py-2 px-4 border-b max-sm:hidden">
                    {moment(job.date).format("ll")}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <span
                      className={`${
                        job.status === "Accepted"
                          ? "bg-green-100 text-green-600"
                          : job.status === "Rejected"
                          ? "bg-red-100 text-red-600"
                          : "bg-blue-100 text-blue-600"
                      } px-4 py-1.5 rounded`}
                    >
                      {job.status}
                    </span>
                  </td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Applications;