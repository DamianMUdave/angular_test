import sql from 'promise-mysql';

import keys from './keys';

const pool = sql.createPool(keys.database);

pool.getConnection()
    .then((connection) => {
        pool.releaseConnection(connection);
        console.log('DB is connected');
    });

export default pool;