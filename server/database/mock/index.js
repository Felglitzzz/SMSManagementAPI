const contactMockData = [
  { _id: 1, name: 'Obito', phone: '08029717900' },
  { _id: 2, name: 'Bjorn', phone: '08020797979' },
  { _id: 3, name: 'Ragnar', phone: '07055657979' },
  { _id: 4, name: 'Danny', phone: '08176534296' },
  { _id: 5, name: 'Luska', phone: '07012345678' },
];

const smsMockData = [
  {
    _id: 1, sender: '08176534296', receiver: '07012345678', message: 'Jesus Saves', status: 'sent',
  },
  {
    _id: 2, sender: '07012345678', receiver: '08176534296', message: 'Jesus Saves', status: 'pending',
  },
  {
    _id: 3, sender: '08020797979', receiver: '08029717900', message: 'Jesus Saves', status: 'pending',
  },
  {
    _id: 4, sender: '08029717900', receiver: '08020797979', message: 'Jesus Saves', status: 'sent',
  },
];

// contact can send/receive multiple messages -
// one to many association btw contact and message model
// ondelete

// delete contact
// removes the messages they sent
// removes references to messages they received


// delete the contact
// remove sms in sms model where the deleted contact is the sender
// if the deleted contact is a receiver, then update the receiver to null

export default {
  contactMockData,
  smsMockData,
};
