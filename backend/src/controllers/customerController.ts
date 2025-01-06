// src/controllers/customerController.ts
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Customer } from "../entities/Customer";

const customerRepository = AppDataSource.getRepository(Customer);

export const addCustomer = async (req: Request, res: Response) => {
  const { first_name, last_name, email, phone_number, shipping_address, zip_code } = req.body;

  if (!first_name || !last_name || !email || !phone_number || !shipping_address || !zip_code) {
    res.status(400).json({ message: "Missing required customer data" });
    return;
  }

  try {
    const customer = customerRepository.create({
      first_name,
      last_name,
      email,
      phone_number,
      shipping_address,
      zip_code,
    });

    const savedCustomer = await customerRepository.save(customer);
    res.status(201).json(savedCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create customer", error });
  }
};
