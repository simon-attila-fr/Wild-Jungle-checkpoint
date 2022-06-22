const AbstractManager = require("./AbstractManager");

class PlantManager extends AbstractManager {
  static table = "plant";

  insert(item) {
    return this.connection.query(
      `insert into ${PlantManager.table} (title) values (?)`,
      [item.title]
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
