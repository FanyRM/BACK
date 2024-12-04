import { Sequelize } from 'sequelize';

/* const sequelize = new Sequelize('mr_macondo', 'root', '123456789', { //Recuerda cambiar contraseña 
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  }); */

  const sequelize = new Sequelize('Mr_macondo', 'root', 'celeste1234', {
    dialect: 'mysql',
    logging: false
  });

export default sequelize;