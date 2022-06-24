const AbstractManager = require("./AbstractManager");

class PlantsManager extends AbstractManager {
  static table = "plant";

  insert(plant) {
    return this.connection.query(
      `insert into ${PlantsManager.table} (name, category_id, light, water, price, image) values (?, ?, ?, ?, ?, ?)`,
      [
        plant.name,
        plant.category_id,
        plant.light,
        plant.water,
        plant.price,
        plant.image,
      ]
    );
  }
}

module.exports = PlantsManager;
