import bcrypt from 'bcrypt';

export const encrypt = (obj) => {
    const saltRounds = 10;
    return bcrypt
        .genSalt(saltRounds)
        .then(salt => {
          return bcrypt.hash(obj, salt);
        })
        .then(hash => {
          return hash;
        })
        .catch(err => console.error(err.message));
};

export const compare = (obj,hash) => {
    return bcrypt
      .compare(obj, hash)
      .then(res => {
        return res; // return true
      })
      .catch(err => console.error(err.message));   
};