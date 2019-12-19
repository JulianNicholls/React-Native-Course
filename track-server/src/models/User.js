const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// On save, encrypt the password
UserSchema.pre('save', function(next) {
  const user = this;

  if (!user.isModified('password')) next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

// Compare the current user password with a candidate password
UserSchema.methods.comparePassword = function(candidate) {
  const user = this;

  return new Promise((resolve, reject) => {
    bcrypt.compare(candidate, user.password, (err, isMatch) => {
      if (err) return reject(err);

      if (!isMatch) reject(false);

      resolve(true);
    });
  });
};

mongoose.model('User', UserSchema);
