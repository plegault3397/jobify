import Job from '../models/jobModel.js';
import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../errors/customErrors.js';

export const getAllJobs = async (req, res) => {
    const jobs = await Job.find({});
    res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
    const { company, position } = req.body;
    const job = await Job.create({ company, position });
    res.status(StatusCodes.CREATED).json({ job });
};

export const getJob = async (req, res) => {
    const { id } = req.params;
    const job = await Job.findById(id);

    if (!job) throw new NotFoundError(`No job with ID ${id}`);
    res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
    const { id } = req.params;

    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
        new: true,
    });

    if (!updatedJob) throw new NotFoundError(`No job with ID ${id}`);

    res.status(StatusCodes.OK).json({ msg: 'Job modified', job: updatedJob });
};

export const deleteJob = async (req, res) => {
    const { id } = req.params;

    const removeJob = await Job.findByIdAndDelete(id);

    if (!removeJob) throw new NotFoundError(`No job with ID ${id}`);

    res.status(StatusCodes.OK).json({ msg: 'Job deleted', job: removeJob });
};
