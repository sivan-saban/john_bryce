// Configuration

class Config { 
    public port = 3001; 
    // mysql database
    public mySQLhost = "localhost";
    public mySQLUser = "root";
    public mySQLPassword = "12345678";
    public mySQLdb = "smarthome";
    public mysqlPort = 3306;
    //another database
}

const config = new Config();
export default config