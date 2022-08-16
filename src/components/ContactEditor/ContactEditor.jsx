import { Wrapper, Input, BtnAddContact } from './ContactEditor.styled';
import { useForm } from 'react-hook-form';
import { useAddContactsMutation } from 'redux/contactsApi';

export const ContactEditor = () => {
  const [addContact] = useAddContactsMutation();
  const { register, handleSubmit, reset } = useForm();

  const handleSubmitAdd = async data => {
    if (data) {
      await addContact({ name: data.name, phone: data.number }).unwrap();
      reset();
    }
  };

  return (
    <Wrapper>
      <form
        onSubmit={handleSubmit(data => {
          handleSubmitAdd(data);
        })}
      >
        <label htmlFor="name">
          <h4>Name</h4>
          <Input
            autoComplete="off"
            type="text"
            name="name"
            {...register('name', {
              register: true,
              required: 'This is required',
            })}
            placeholder="Name"
          />
        </label>
        <label>
          <h4>Number</h4>
          <Input
            autoComplete="off"
            htmlFor="number"
            type="tel"
            name="number"
            {...register('number', {
              register: true,
              required: 'This is required',
            })}
            placeholder="Number"
          />
        </label>
        <BtnAddContact type="submit"></BtnAddContact>
      </form>
    </Wrapper>
  );
};
