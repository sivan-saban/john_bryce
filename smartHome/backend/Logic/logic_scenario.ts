// All logical operations of the backend folder will displayed here.
// importations 
import dal from "../Utils/dal_mysql"
import { OkPacket } from "mysql";
import ScenarioModel from "../Models/ScenariosModel";



// functions( async / await ) for getting data from DB
const getAllScenario = async (): Promise<ScenarioModel[]> => {
    // command line for the DB
    const sql = `
        SELECT scenario.*, devices.name as device_type
        FROM scenario JOIN devices 
        ON scenario.device_type = devices.id 
    `;
    // a promise function that connects us to the database with the command line
    const result = await dal.execute(sql);
    return result;
}

const addScenario = async (newScenario: ScenarioModel): Promise<ScenarioModel> => {
    // command line for the DB
    const sql = `INSERT INTO scenario (device_type, name, start_value, end_value, start_date, end_date) 
    VALUES (${newScenario.device_type}, '${newScenario.name}', ${newScenario.start_value}, 
            ${newScenario.end_value}, '${newScenario.start_date}', '${newScenario.end_date}');
    `;
    const response : OkPacket = await dal.execute(sql);
    newScenario.id = response.insertId;
    return newScenario;
} 

const getScenarioById = async (id:number):Promise<ScenarioModel[]>=>{
    const sql = `SELECT * FROM scenario WHERE id=${id}`;
    const response = await dal.execute(sql);
    return response[0];
}

const updateScenario = async (scenario: ScenarioModel): Promise<ScenarioModel> => {
    const sql = `
    UPDATE scenario SET device_type = ${scenario.device_type}, name = '${scenario.name}', 
    start_value = ${scenario.start_value}, end_value = ${scenario.end_value}, start_date = '${scenario.start_date}', 
    end_date = '${scenario.end_date}' 
    WHERE (id = ${scenario.id});
    `;
    const response : OkPacket = await dal.execute(sql);
    return scenario;
}

// exporting 
export default {
    getAllScenario,
    addScenario,
    getScenarioById,
    updateScenario
}