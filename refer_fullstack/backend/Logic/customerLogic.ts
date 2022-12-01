import dal from "../Utils/dal_mysql"
import { OkPacket } from "mysql";
import Course from "../Models/ReferModel";
import CustomerModel from "../Models/CustomerModel";
//add student
const addCustomer = async (newCustomer: CustomerModel): Promise<CustomerModel> => {
    console.log(newCustomer);
    // command line for the DB
    const sql = `
    INSERT INTO customer VALUES
    (DEFAULT,
    '${newCustomer.name}',
    '${newCustomer.address}',
    '${newCustomer.tel}',
    ${newCustomer.refer},
    '${newCustomer.memo}'
    )`;
    const response: OkPacket = await dal.execute(sql);
    newCustomer.id = response.insertId;
    return newCustomer;
}

//delete student
const deleteCustomer = async (id: number): Promise<void> => {
    const sql = `
    DELETE FROM customer WHERE id=${id}`;
    const response = await dal.execute(sql);
    
}

//all students
const getAllCustomers = async (): Promise<CustomerModel[]> => {
    // command line for the DB
    const sql = `
        SELECT customer.* , refer.refer 
        FROM customer JOIN refer
        ON customer.refer = refer.id
    `;
    // a promise function that connects us to the database with the command line
    const customer = await dal.execute(sql);
    return customer;
}

//single students
const getSingleCustomer = async (id:number): Promise<CustomerModel> => {
    // command line for the DB
    const sql =  `
        SELECT customer.* , refer.refer 
        FROM customer JOIN refer
        ON customer.refer = refer.id
        WHERE customer.id=${id}
        `;
    // a promise function that connects us to the database with the command line
    const customer = await dal.execute(sql);
    return customer;
}

const getAllRefers = async():Promise<Course[]> =>{
    const sql = "SELECT * FROM refer";
    const refers = await dal.execute(sql);
    return refers;
}

export default{
    addCustomer,
    deleteCustomer,
    getAllCustomers,
    getSingleCustomer,
    getAllRefers
}

