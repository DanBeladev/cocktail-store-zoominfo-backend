import { USERS } from '../common/constants';

exports.getUsers = (req, res) => {
  if (USERS.length <= 0) {
    console.log('empty');
    res.json({ USERS, message: 'No users in system' });
    return;
  }
  res.json(USERS);
};
