import Joi from "joi";

const bookSchema = Joi.object({
    name: Joi.string().required(),
    author: Joi.string().required(),
    publishingYear: Joi.number().required(),
    rating: Joi.number().required(),
    genre: Joi.array().min(1).items(Joi.string()).required(),
});

const bookValidator = (req, res, next) => {
    const bookData = req.body;
    const validation = bookSchema.validate(bookData);

    if (validation.error) {
        res.status(400).send({
            message: validation.error.details[0].message
        });
    } else {
        next();
    }
};

export default bookValidator;