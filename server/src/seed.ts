require("module-alias/register");

import connectDB from "./config/db";
import organizationModel from "./schemas/organization.schema";
import userSchema from "./schemas/user.schema";
import { config } from "dotenv";

config({ path: `.env` });

const seedUsers = async () => {
  try {
    await connectDB();

    await userSchema.deleteMany();
    await organizationModel.deleteMany();

    const organization = await organizationModel.create({
      name: "brak",
      users: [],
      licenseExpiryDate: new Date("2030-01-01"),
      country: "Polska",
      city: "Poznań",
      address: "testowa 123",
      zipcode: "12-123",
      logo: "brak",
    });

    const users = [
      {
        firstName: "Albert",
        lastName: "Przybyła",
        email: "albert.przybyla2@gmail.com",
        password: "password123",
        role: "admin",
        organization: organization._id,
      },
    ];

    await userSchema.insertMany(users);
    console.log("Users seeded");
  } catch (err) {
    console.error("Error seeding users:", err);
  } finally {
    process.exit(0);
  }
};

seedUsers();
