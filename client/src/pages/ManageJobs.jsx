import React from "react";
import { manageJobsData } from "../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const ManageJobs = () => {
  const navigate = useNavigate();
  return (
    <div className="container p-4 max-w-5xl">
      <div className="overflow-x-auto">
        <table className="min-w-full tracking-wide max-sm:text-sm bg-white border border-gray-200">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left max-sm:hidden">#</th>
              <th className="py-2 px-4 text-left">Job Title</th>
              <th className="py-2 px-4 text-left max-sm:hidden">Date</th>
              <th className="py-2 px-4 text-left max-sm:hidden">Location</th>
              <th className="py-2 px-4 text-center">Applicants</th>
              <th className="py-2 px-4 text-left">Visible</th>
            </tr>
          </thead>

          <tbody>
            {manageJobsData.map((job, index) => (
              <tr key={index} className="text-gray-700">
                <td className="py-2 px-4 border-b max-sm:hidden">
                  {index + 1}
                </td>
                <td className="py-2 px-4 border-b">{job.title}</td>
                <td className="py-2 px-4 border-b max-sm:hidden">
                  {moment(job.date).format("ll")}
                </td>
                <td className="py-2 px-4 border-b max-sm:hidden">
                  {job.location}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {job.applicants}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <input className="scale-125" type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={() => navigate("/dashboard/add-job")}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Add new job
        </button>
      </div>
    </div>
  );
};

export default ManageJobs;