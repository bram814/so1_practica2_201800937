module.exports = {
    NODE_ENV:   process.env.NODE_ENV    || 'dev',
    HOST:       process.env.HOST        || 'localhost',
    PORT:       process.env.PORT        || 5000,
    
    /* DB */
    DB_HOST:    process.env.DB_HOST     || '34.173.164.140',
    DB_USER:    process.env.DB_USER     || 'root',
    DB_PASS:    process.env.DB_PASS     || 'root',
    DB_NAME:    process.env.DB_NAME     || 'dbt2',
    DB_PORT:    process.env.DB_PORT     || '3306',

}