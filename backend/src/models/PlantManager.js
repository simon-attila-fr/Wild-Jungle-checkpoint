const AbstractManager = require("./AbstractManager");

class PlantManager extends AbstractManager {
  static table = "plant";

  find(id) {
    return this.connection.query(
      `select plant.*, category.name as category from ${PlantManager.table} inner join category on category_id=category.id where plant.id = ?;`,
      [id]
    );
  }

  findAll() {
    return this.connection.query(
      `select plant.*, category.name as category from ${PlantManager.table} inner join category on category_id=category.id`
    );
  }

  insert(plant) {
    return this.connection.query(
      `insert into ${PlantManager.table} (name, category_id, light, water, price, image) values (?,?,?,?,?,?)`,
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

  update(item) {
    return this.connection.query(
      `update ${PlantManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = PlantManager;
