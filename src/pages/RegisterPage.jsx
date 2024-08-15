import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth';

const RegisterPage = () => {

  const createUser = useAuth();

  const { handleSubmit, register, reset } = useForm();


  const submit = data => {
    const url = 'https://store-productos-database-production.up.railway.app/api/v1/users'
    createUser(url, data);
    reset({
      address: "",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      phone: ""
    });
  }

  return (
    <div>RegisterPage
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input {...register('firstName')} id="name" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input {...register('lastName')} id="lastName" type="text" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input {...register('address')} id="address" type="address" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register('email')} id="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...register('password')} id="password" type="password" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input {...register('phone')} id="phone" type="number" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage