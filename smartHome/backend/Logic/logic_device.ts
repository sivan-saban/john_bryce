// All logical operations of the backend folder will displayed here.
// importations 
import dal from "../Utils/dal_mysql"
import { OkPacket } from "mysql";
import DeviceModel from "../Models/deviceModel";


// functions( async / await ) for getting data from DB
const getAllDevices = async (): Promise<DeviceModel[]> => {
    // command line for the DB
    const sql = `
        SELECT * FROM devices
    `;
    // a promise function that connects us to the database with the command line
    const result = await dal.execute(sql);
    return result;
}

const addDevice = async (newDevice: DeviceModel): Promise<DeviceModel> => {
    // command line for the DB
    const sql = `INSERT INTO devices (name, node_id, minimum_value, maximum_value) 
    VALUES ('${newDevice.name}', ${newDevice.node_id}, ${newDevice.maximum_value}, ${newDevice.maximum_value});
    `;
    const response : OkPacket = await dal.execute(sql);
    newDevice.id = response.insertId;
    return newDevice;
} 
const getDeviceById = async (id:number):Promise<DeviceModel[]>=>{
    const sql = `SELECT * FROM devices WHERE id=${id}`;
    const response = await dal.execute(sql);
    return response[0];
}
//update just one filed-value
//לא צריך להחזיר כלום הוא רק מעדכן, וכדי לראות את העידכון ניגש לנתיב של כל המכשירים
const changeValue= async (deviceID:number, value:number):Promise<void> => {
    const sql = `Update devices SET value=${value}
                WHERE id=${deviceID}`;
    await dal.execute(sql);    
}
const updateShutter= async ( value:number):Promise<void> => {
    const sql = `Update devices SET value=${value}
                WHERE name='shutter'`;
    await dal.execute(sql);    
}


export default {
    getAllDevices,
    addDevice,
    getDeviceById,
    changeValue,
    updateShutter
}