import Collection from './collection';

/**
 * Create a new DB instance (not meant to be instantiated directly).
 * @class
 * @return {DB} a DB instance.
 */
class DB {
  constructor(client, service, name) {
    this.client = client;
    this.service = service;
    this.name = name;
  }

  /**
   * Returns a Collection instance representing a MongoDB Collection object.
   *
   * @method
   * @param {String} name The collection name.
   * @param {Object} [options] Additional options.
   * @return {Collection} returns a Collection instance representing a MongoDb collection.
   */
  collection(name, options = {}) {
    return new Collection(this, name, options);
  }
}

export default DB;
