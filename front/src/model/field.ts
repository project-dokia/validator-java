export class Field {
    _id: String;
	_rev: String;

	idType: String;
	titleType:String;
	
	title: String;
	value : any;
	needOtherId: Boolean;
	
	otherId: String;
	titleId:String;
	titleModelId: String;
	
	type: String;

	idModel:String;
	titleModel:String;

	dependency:boolean;
	idDependency:string;

	result:String;
	percentage: number;
	percentageResult: number;

	important:boolean;
}