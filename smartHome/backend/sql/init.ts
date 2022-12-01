import dal_mysql from "../Utils/dal_mysql";

const mysql_devices = "CREATE TABLE IF NOT EXISTS devices (id INT NOT NULL AUTO_INCREMENT,name VARCHAR(45) NULL,node_id INT NULL,minimum_value INT NULL,maximum_value INT NULL,value INT NULL , PRIMARY KEY (id))";
const mysql_scenario = "CREATE TABLE IF NOT EXISTS scenario (id INT NOT NULL AUTO_INCREMENT,device_type INT NULL,name VARCHAR(45) NULL,start_value INT NULL,end_value INT NULL,start_date DATETIME NULL, end_date DATETIME NULL,PRIMARY KEY (id))";

const mysql_init = ()=>{
    dal_mysql.execute(mysql_devices);
    dal_mysql.execute(mysql_scenario);
}

export default mysql_init;