import mongoose from 'mongoose';
import { FacultySchema} from '../models/facultyModel';

const Faculty = mongoose.model('Faculty', FacultySchema);

export const addNewFaculty = (req, res) => {
    let newFaculty = new Faculty(req.body);

    newFaculty.save((err, Faculty) => {
        if (err) {
            res.send(err);
        }
        res.json(Faculty);
    });
};

export const getFaculty = (req, res) => {

    Faculty.find({}, (err, Faculty) => {
        if (err) {
            res.send(err);
        }
        res.json(Faculty);
    });
};

export const getFacultyWithID = (req, res) => {

    Faculty.findById((req.params.FacultyId), (err, Faculty) => {
        if (err) {
            res.send(err);
        }
        res.json(Faculty);
    });
};

export const updateFaculty = (req, res) => {

    Faculty.findOneAndUpdate({ _id: req.params.FacultyId}, req.body, {new: true}, (err, Faculty) => {
        if (err) {
            res.send(err);
        }
        res.json(Faculty);
    });
};

export const deleteFaculty = (req, res) => {

    Faculty.remove({_id: req.params.FacultyId}, (err, Faculty) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted player' });
    });
};
