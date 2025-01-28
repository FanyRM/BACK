import { Sequelize } from 'sequelize';

 const sequelize = new Sequelize('Mr_macondo', 'root', '123456', { //Recuerda cambiar contraseña 
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  }); 

  // const sequelize = new Sequelize('Mr_macondo', 'root', '123456', {
  //   dialect: 'mysql',
  //   logging: false
  // });

export default sequelize;