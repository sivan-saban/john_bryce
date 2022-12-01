class ScenarioModel {
    public id:number=0;
    public device_type:number=0;
    public name:string="";
    public start_value:number=0;
    public end_value:number=0;
    public start_date:Date= new Date();
    public end_date:Date= new Date();
}

export default ScenarioModel;