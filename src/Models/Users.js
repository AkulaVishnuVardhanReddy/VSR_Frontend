import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    minlength: [4, 'First name must be at least 4 characters long'],
  },
  lastname: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    minlength: [4, 'Last name must be at least 4 characters long'],
  },
  dob: {
    type: Date,
    required: [true, 'Date of Birth is required'],
  },
  gender: {
    type: String,
    required: [true, 'Gender is required'],
    enum: {
        values: ['Male', 'Female', 'Other'], 
        message: 'Invalid Gender', 
    },
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'], // Regex for email validation
  },
  phoneno: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^\d{10}$/, 'Phone number must be 10 digits'], // 10-digit validation
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Users = mongoose.model('Users', userSchema);
export default Users;

