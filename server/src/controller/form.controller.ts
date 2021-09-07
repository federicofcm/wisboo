import {Request, Response} from 'express';
import {createForm, findFormById} from '../service/form.service';
import log from "../logger"

/**
 * Handle form creation requests
 * @param req Request body used for the creation
 * @param res Response obtained from the creation
 * @returns If request is successful status 200, else status 409 
 */
export async function createFormHandler(req: Request, res: Response) {
    try {
        const form = await createForm(req.body);
        return res.status(200).send(form.toJSON());
    } catch(e) {
        log.error(e as Error);
        return res.status(409).send((e as Error).message);
    }
}

/**
 * Handle form search by id requests
 * @param req Request that contains the desired id
 * @param res Response obtained from the search
 * @returns If request is successful status 200, else status 409 
 */
export async function findFormByIdHandler(req: Request, res: Response) {
    try {
        const form = await findFormById(req.params.id);
        return res.status(200).send(form?.toJSON());
    } catch(e) {
        log.error(e as Error);
        return res.status(409).send((e as Error).message);
    }
}