const AbstractManager = require("./AbstractManager");

class PlantsManager extends AbstractManager {
  static table = "plant";

  insert(plant) {
    return this.connection.query(
      `insert into ${PlantsManager.table} (title) values (?)`,
      [plant.title]
    );
  }
}

module.exports = PlantsManager;
