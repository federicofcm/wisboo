import {DocumentDefinition} from 'mongoose';
import Form, {FormDocument} from '../model/form.model';

export async function createForm(input: DocumentDefinition<FormDocument>) {
    return await Form.create(input);
}

export async function findFormById(id: string) {
    return await Form.findById(id);
}