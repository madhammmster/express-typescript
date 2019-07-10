import winston, { createLogger } from 'winston';

const logger = createLogger({
    level: 'silly',
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename: 'combined.log'
        })
    ]
});

export default logger;