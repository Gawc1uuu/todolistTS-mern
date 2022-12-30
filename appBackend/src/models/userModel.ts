import mongoose, { Schema, model, Model } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

interface UserInterface {
  _id: string;
  email: string;
  password: string;
}

interface UserModel extends Model<UserInterface> {
  login(email: string, password: string): UserInterface;
  signup(email: string, password: string): UserInterface;
}

const userSchema = new Schema<UserInterface, UserModel>({
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
});

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("email and password are required");
  }

  if (!validator.isEmail(email)) {
    throw Error("Incorrect email");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("user with that email do not exists");
  }

  const match = await bcrypt.compare(password, user.password);

  if (match) {
    return user;
  } else {
    throw Error("incorrect password");
  }
};

userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("email and password are required");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("User with that email already exists");
  }

  if (!validator.isEmail(email)) {
    throw Error("Incorrect email");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = this.create({ email, password: hash });
  return user;
};

const User = model<UserInterface, UserModel>("User", userSchema);
export default User;
