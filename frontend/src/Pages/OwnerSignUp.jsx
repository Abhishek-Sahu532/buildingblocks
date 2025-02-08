import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Card, CardBody, Typography } from '@material-tailwind/react';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
  houseOwnerRegistrationRequest,
  houseOwnerRegistrationSuccess,
  houseOwnerRegistrationFail
} from '../redux/Slices/HouseOwnerSlices';

const OwnerSignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  const { error, success, message } = useSelector((state) => state.houseOnwer);

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedState, setSelectedState] = useState(null);

  const cityOptions = [
    { value: 'Bhopal', label: 'Bhopal' },
    { value: 'New York', label: 'New York' },
    { value: 'Los Angeles', label: 'Los Angeles' },
    { value: 'Chicago', label: 'Chicago' },
    { value: 'Houston', label: 'Houston' },
    { value: 'Miami', label: 'Miami' }
  ];

  const stateOptions = [
    { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
    { value: 'California', label: 'California' },
    { value: 'Texas', label: 'Texas' },
    { value: 'New York', label: 'New York' },
    { value: 'Florida', label: 'Florida' },
    { value: 'Illinois', label: 'Illinois' }
  ];

  const navigate = useNavigate();
  // console.log(error, registrationSuccess, message);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    let form = new FormData();
    form.set('first_name', data.first_name);
    form.set('last_name', data.last_name);
    form.set('email', data.email);
    form.set('mobile_number', data.mobile_number);
    form.set('address', data.address);
    form.set('city', selectedCity);
    form.set('state', selectedState);

    try {
      dispatch(houseOwnerRegistrationRequest());
      const config = {
        headers: { 'Content-Type': 'application/json' }
      };
      let res = '';
      if (import.meta.env.VITE_DEV_MODE === 'production') {
        res = await axios.post(`${import.meta.env.BACKEND_URL}/api/v1/owner/signup`, form, config);
      } else {
        res = await axios.post(`/api/v1/owner/signup`, form, config);
      }
      console.log(res.data);
      dispatch(houseOwnerRegistrationSuccess(res?.data));
    } catch (error) {
      // console.log(error?.response.data.message);
      dispatch(houseOwnerRegistrationFail(error?.response.data.message));
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success(message || 'Signedup Successfully');
      navigate('/');
    }
  }, [error, success, message, navigate]);

  return (
    <Card className="max-w-lg mx-auto my-10 p-6 shadow-lg">
      <h4 className="block font-sans text-2xl text-primaryText antialiased font-semibold leading-snug tracking-normal">
        Sign Up
      </h4>
      <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
        Nice to meet you! Enter your details to register.
      </p>

      <CardBody>
        <Typography variant="h4" className="text-center mb-4">
          Agent Registration
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Full Name"
              {...register('first_name', { required: 'First name is required' })}
              error={!!errors.first_name}
              className="rounded-lg shadow-md"
            />
            <Input
              label="Last Name"
              {...register('last_name', { required: 'Last name is required' })}
              error={!!errors.last_name}
              className="rounded-lg shadow-md"
            />
          </div>

          <Input
            label="Email"
            type="email"
            {...register('email', { required: 'Email is required' })}
            error={!!errors.email}
            className="rounded-lg shadow-md"
          />

          <Input
            label="Mobile Number"
            {...register('mobile_number', { required: 'Mobile number is required' })}
            error={!!errors.mobile_number}
            className="rounded-lg shadow-md"
          />
          <Input
            label="Address"
            {...register('address', { required: 'Address is required' })}
            error={!!errors.mobile_number}
            className="rounded-lg shadow-md"
          />

          <div className="grid grid-cols-2 gap-4">
            {/* City Dropdown */}
            <div>
              <Typography variant="small" className="mb-1">
                City
              </Typography>
              <Controller
                name="city"
                control={control}
                rules={{ required: 'City is required' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={cityOptions}
                    placeholder="Select City"
                    isSearchable
                    value={cityOptions.find((option) => option.value === field.value)}
                    onChange={(selectedOption) => {
                      field.onChange(selectedOption?.value);
                      setSelectedCity(selectedOption.value);
                    }}
                    className="rounded-lg shadow-md"
                  />
                )}
              />
              {errors.city && (
                <Typography variant="small" color="red">
                  {errors.city.message}
                </Typography>
              )}
            </div>

            {/* State Dropdown */}
            <div>
              <Typography variant="small" className="mb-1">
                State
              </Typography>
              <Controller
                name="state"
                control={control}
                rules={{ required: 'State is required' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={stateOptions}
                    placeholder="Select State"
                    isSearchable
                    value={stateOptions.find((option) => option.value === field.value)}
                    onChange={(selectedOption) => {
                      field.onChange(selectedOption?.value);
                      setSelectedState(selectedOption.value);
                    }}
                    className="rounded-lg shadow-md"
                  />
                )}
              />
              {errors.state && (
                <Typography variant="small" color="red">
                  {errors.state.message}
                </Typography>
              )}
            </div>
          </div>

          <Button type="submit" fullWidth className="rounded-lg shadow-md">
            Submit
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default OwnerSignUp;
