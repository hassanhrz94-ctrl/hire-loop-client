"use client";

import React from "react";

export default function ApplicationsTable({ jobs = [] }) {
  return (
    <div className="bg-[#121212] border border-zinc-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-5">
        Applications ({jobs.length})
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-zinc-800">
              <th className="py-3 text-zinc-400">Job Title</th>
              <th className="py-3 text-zinc-400">Company</th>
              <th className="py-3 text-zinc-400">Status</th>
              <th className="py-3 text-zinc-400">Applied Date</th>
              <th className="py-3 text-zinc-400">Action</th>
            </tr>
          </thead>

          <tbody>
            {jobs?.map((job) => (
              <tr
                key={job._id || job.jobId}
                className="border-b border-zinc-800 hover:bg-zinc-900"
              >
                <td className="py-4 text-white">
                  {job.jobTitle || "N/A"}
                </td>

                <td className="py-4 text-zinc-300">
                  {job.companyName || "N/A"}
                </td>

                <td className="py-4">
                  <span className="px-3 py-1 rounded-full text-xs border border-zinc-700">
                    {job.status || "Applied"}
                  </span>
                </td>

                <td className="py-4 text-zinc-400">
                  {job.createdAt
                    ? new Date(job.createdAt).toLocaleDateString()
                    : "N/A"}
                </td>

                <td className="py-4">
                  <button
                    className="px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-700"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}

            {jobs.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-8 text-zinc-500"
                >
                  No Applications Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}