import Question from './question';

export default interface Form {
    name: string;
    description: string;
    questions: Question[];
}