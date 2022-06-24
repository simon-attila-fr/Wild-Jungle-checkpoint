const AbstractManager = require("./AbstractManager");

class PlantsManager extends AbstractManager {
  static table = "plant";

  find(id) {
    return this.connection.query(
      `select p.*, c.name as category from  ${this.table} as p inner join category as c on p.category_id=c.id where p.id = ?`,
      [id]
    );
  }

  findAll() {
    return this.connection.query(
      `select p.*, c.name as category from  ${this.table} as p inner join category as c on p.category_id=c.id`
    );
  }

  insert(plant) {
    return this.connection.query(
      `insert into ${PlantsManager.table} (name, category_id, light, water, price, image) values (?, ?, ?, ?, ?, ?)`,
      [
        plant.name,
        plant.categoryId,
        plant.light,
        plant.water,
        plant.price,
        plant.image,
      ]
    );
  }
}

module.exports = PlantsManager;
