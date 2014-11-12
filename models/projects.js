var Project = sequelize.define('Project', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  datefinish: Sequelize.DATE,
  amountToRaise: Sequelize.INTEGER
});
