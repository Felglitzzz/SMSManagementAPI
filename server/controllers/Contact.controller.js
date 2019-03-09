import Contact from '../database/model/Contact';

class ContactController {
  static async createContact(req, res) {
    try {
      const { name, phone } = req.body;
      if (!name) {
        return res.status(400).send({
          message: 'Name is required',
        });
      }

      if (!phone) {
        return res.status(400).send({
          message: 'Phone is required',
        });
      }

      const user = await new Contact(req.body);
      await user.save((err) => {
        if (err) {
          return console.log('error when saving user', err);
        }
        return res.status(201).send({
          message: 'User saved successfully',
        });
      });
    } catch (err) {
      return res.send({
        message: err.message,
      });
    }
  }

  static async deleteContact(req, res) {
    try {
      const user = await Contact.findById({ _id: req.params.id });
      if (!user) {
        return res.status(404).send({
          message: 'contact not found',
        });
      }
      if (user) {
        user.remove();
        return res.status(200).send({
          message: 'contact saved successfully',
        });
      }
    } catch (err) {
      if (err.name === 'CastError') {
        return res.status(422).send({
          message: 'incorrect contact id',
        });
      }
      return res.status(422).send({
        message: 'something went wrong',
      });
    }
  }
}

export default ContactController;
