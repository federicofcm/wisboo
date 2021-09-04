import {Express, Request, Response} from 'express';
import {createFormHandler, findFormByIdHandler} from "./controller/form.controller";
import validateRequest from "./middleware/validateRequest";
import {createFormSchema} from "./schema/form.schema";

export default function(app : Express) {
    // Post form
    app.post("/api/forms", validateRequest(createFormSchema), createFormHandler);

    // Get form by id
    app.get("/api/forms/:id", findFormByIdHandler);

}