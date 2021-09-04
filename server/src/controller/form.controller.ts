import {Request, Response} from 'express';
import {createForm, findFormById} from '../service/form.service';
import log from "../logger"

export async function createFormHandler(req: Request, res: Response) {
    try {
        const form = await createForm(req.body);
        return res.status(200).send(form.toJSON());
    } catch(e) {
        log.error(e as Error);
        return res.status(409).send((e as Error).message);
    }
}

export async function findFormByIdHandler(req: Request, res: Response) {
    try {
        const form = await findFormById(req.params.id);
        return res.status(200).send(form?.toJSON());
    } catch(e) {
        log.error(e as Error);
        return res.status(409).send((e as Error).message);
    }
}