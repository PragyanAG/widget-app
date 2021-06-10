const db = require("../models");
const Labelplaceholder = db.labelplaceholders;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
     Labelplaceholder.findAll({attributes: ['labelID', 'label','placeholder']})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving labelplaceholders."
        });
      });
  };

  