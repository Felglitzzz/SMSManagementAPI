import Sms from '../database/model/Sms';

class SmsController {
  static async sendSms(req, res) {
    try {
      const { message, sender, receiver, status } = req.body;
      if (!message || !sender || !receiver || !status) {
        return res.status(400).send({
          message: 'All fields are required',
        });
      }
      const sms = new Sms(req.body);

      await sms.save((err) => {
        if (err) {
          return res.status(422).send({
            message: 'Error saving sms to the database',
          });
        }
        return res.status(201).send({
          message: 'Sms saved successfully',
        });
      });
    } catch (error) {
      console.log('error sending sms', error);
    }
  }

  static async getSms(req, res) {
    Sms
      .find()
      .populate('sender')
      .populate('receiver')
      .exec((err, sms) => {
        if (err) {
          return res.send({
            message: 'error retrieving sms',
          });
        }

        return res.status(200).send({
          message: 'sms retrieved successfully',
          data: sms,
        });
      });
  }

  static getSmsLinkedToSender(req, res) {
    Sms
      .find({ sender: req.params.id })
      .populate('sender')
      .exec((err, sms) => {
        if (err) {
          return res.send({
            message: 'error retrieving sms',
          });
        }

        return res.status(200).send({
          message: 'sms for this sender retrieved successfully',
          data: sms,
        });
      });
  }

  static getSmsLinkedToReceiver(req, res) {
    Sms
      .find({ receiver: req.params.id })
      .populate('receiver')
      .exec((err, sms) => {
        if (err) {
          return res.send({
            message: 'error retrieving sms',
          });
        }

        return res.status(200).send({
          message: 'sms for this received retrieved successfully',
          data: sms,
        });
      });
  }
}

export default SmsController;
