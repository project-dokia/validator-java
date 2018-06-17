import { Field } from "./field";

export class Rule {
    _id: String;
    _rev: String;
    fields: Field[];
    type: String;
    description: String;
}