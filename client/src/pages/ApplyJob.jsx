import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";
import { assets } from "../assets/assets";
import kconvert from "k-convert";
import moment from "moment";

const ApplyJob = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);
  const { jobs } = useContext(AppContext);

  const fetchJob = async () => {
    const getJobData = jobs.filter((job) => job._id === id);
    if (getJobData.length !== 0) {
      setJobData(getJobData[0]);
      console.log(getJobData[0]);
    }
  };

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob();
    }
  }, [id, jobs]);
  return jobData ? (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto">
        <div className="bg-white text-black w-full rounded-lg">
          <div className="flex justify-center lg:justify-between flex-wrap gap-8 py-20 px-14 mb-6 border border-sky-400 bg-sky-50 rounded-xl">
            <div className="flex flex-col md:flex-row items-center">
              <img
                className="h-24 p-4 mr-4 max-md:mb-4 border bg-white rounded-lg"
                src={jobData.companyId.image}
                alt=""
              />
              <div className="text-center md:text-left text-neutral-700">
                <h3 className="text-2xl sm:text-4xl font-medium">
                  {jobData.title}
                </h3>
                <div className="flex flex-row flex-wrap gap-y-2 gap-6 items-center mt-2 text-gray-600">
                  <span className="flex items-center gap-2">
                    <img src={assets.suitcase_icon} alt="" />
                    {jobData.companyId.name}
                  </span>
                  <span className="flex items-center gap-2">
                    <img src={assets.location_icon} alt="" />
                    {jobData.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <img src={assets.person_icon} alt="" />
                    {jobData.level}
                  </span>
                  <span className="flex items-center gap-2">
                    <img src={assets.money_icon} alt="" />
                    CTC: {kconvert.convertTo(jobData.salary)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center">
              <button className="bg-blue-600 text-white py-2.5 px-10 rounded">
                Apply Now
              </button>
              <p className="mt-2 text-gray-600">
                Posted {moment(jobData.date).fromNow()}
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="w-full lg:w-2/3">
              <h2 className="mb-4 text-2xl font-semibold">Job Description</h2>
              <div
                className="rich-text"
                dangerouslySetInnerHTML={{ __html: jobData.description }}
              ></div>
              <button className="bg-blue-600 text-white py-2.5 px-10 rounded mt-10">
                Apply Now
              </button>
            </div>

            {/*  */}
            <div className="w-full lg:w-1/3 rounded space-y-5 mt-8 lg:mt-0 lg:ml-8">
              <h2 className="font-medium">More jobs from {jobData.companyId.name}</h2>
              {jobs
                .filter(
                  (job, index) =>
                    job._id !== jobData._id &&
                    job.companyId._id === jobData.companyId._id
                )
                .filter((job) => true)
                .slice(0, 3)
                .map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default ApplyJob;
