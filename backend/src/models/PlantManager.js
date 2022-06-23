const AbstractManager = require("./AbstractManager");

class PlantManager extends AbstractManager {
  static table = "plant";

  insert(item) {
    return this.connection.query(
      `insert into ${PlantManager.table} (name, light, water, price, image, category_id) values (?,?,?,?,?,?)`,
      [
        item.name,
        item.light,
        item.water,
        item.price,
        item.image,
        item.category_id,
      ]
    );
  }

  findAll() {
    return this.connection.query(
      `select * , category.name as category from  ${PlantManager.table}
        inner join category ON ${PlantManager.table}.category_id = category.id
        `
    );
  }

  find(id) {
    return this.connection.query(
      `select *, category.name as category from  ${PlantManager.table}
    inner join category ON ${PlantManager.table}.category_id = category.id where plant.id = ?`,
      [id]
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
