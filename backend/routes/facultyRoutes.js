import { addNewFaculty, getFaculty, getFacultyWithID, updateFaculty, deleteFaculty } from '../controllers/facultyControllers';

const routes = (app) => {
    app.route('/faculty')
    //GET endpoint
        .get(getFaculty)
    // POST endpoint
        .post(addNewFaculty);

    app.route('/faculty/:FacultyId')
    //GET with id endpoint
        .get(getFacultyWithID)
    //UPDATE endpoint for specific player
        .put(updateFaculty)
    //DELETE endpoint for specific player
        .delete(deleteFaculty);

};

export default routes;