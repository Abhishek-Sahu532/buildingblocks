import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Card, CardBody, Typography, Switch } from '@material-tailwind/react';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { registerAgentRequest, registerAgentSuccess, registerAgentFail } from '../redux/Slices';
import axios from 'axios';
import { registerAgentRequest, registerAgentSuccess, registerAgentFail } from '../redux/Slices/AgentSlices';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function AgentForm() {
  const { loading, error, registrationSuccess, message } = useSelector((state) => state.agent);
  const navigate = useNavigate();
  // console.log(error, registrationSuccess, message);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      full_name: '',
      exp_in_field: false
    }
  });
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedState, setSelectedState] = useState(null);
  const expInField = watch('exp_in_field');
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

  const onSubmit = async (data) => {
    let form = new FormData();
    form.set('firstName', data.first_name);
    form.set('lastName', data.last_name);
    form.set('email', data.email);
    form.set('password', data.password);
    form.set('confirmPassword', data.confirmPassword);
    form.set('mobileNumber', data.mobile_number);
    form.set('city', selectedCity);
    form.set('state', selectedState);
    form.set('area', data.local_area);
    form.set('experienceInField', data.exp_in_field || false);
    form.set('prevOrgName', data.prev_organization_name || '');
    form.set('totalExp', data.total_exp || 0);
    if (data.avatar) {
      form.set('avatar', data.avatar[0]);
    }
    try {
      dispatch(registerAgentRequest());
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true
      };
      let res = '';
      if (import.meta.env.VITE_DEV_MODE === 'production') {
        res = await axios.post(`${import.meta.env.BACKEND_URL}/api/v1/agent/add-agent`, form, config);
      } else {
        res = await axios.post(`/api/v1/agent/add-agent`, form, config);
      }
      dispatch(registerAgentSuccess(res.data));
    } catch (error) {
      // console.log(error?.response.data.message);
      dispatch(registerAgentFail(error?.response.data.message));
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (registrationSuccess) {
      toast.success(message || 'Registration Successful!');
      navigate('/');
    }
  }, [error, registrationSuccess, message, navigate]);
  return (
    <Card className="max-w-lg mx-auto my-10 p-6 shadow-lg">
      <CardBody>
        <Typography variant="h4" className="text-center mb-4">
          Agent Registration
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="First Name"
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

          <Input label="Full Name" {...register('full_name')} disabled className="rounded-lg shadow-md" />

          <Input
            label="Email"
            type="email"
            {...register('email', { required: 'Email is required' })}
            error={!!errors.email}
            className="rounded-lg shadow-md"
          />

          <Input
            label="Password"
            type="password"
            {...register('password', { required: 'Password is required' })}
            error={!!errors.password}
            className="rounded-lg shadow-md"
          />
          <Input
            label="Confirm Password"
            type="password"
            {...register('confirmPassword', { required: 'Confirm Password is required' })}
            error={!!errors.confirmPassword}
            className="rounded-lg shadow-md"
          />

          <Input
            label="Mobile Number"
            {...register('mobile_number', { required: 'Mobile number is required' })}
            error={!!errors.mobile_number}
            className="rounded-lg shadow-md"
          />

          <div>
            <Typography variant="small" className="mb-2">
              Profile Picture
            </Typography>
            <input
              type="file"
              accept="image/*"
              {...register('avatar', {
                required: 'Avatar is required'
              })}
              // onChange={handleProfilePicChange}
              className="w-full rounded-lg shadow-md border border-gray-300 p-2"
            />
          </div>

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

          <Input
            label="Local Area"
            {...register('local_area', { required: 'Local area is required' })}
            className="rounded-lg shadow-md"
          />

          {/* Toggle Experience in Field */}
          <Switch
            label="Experience in Field"
            {...register('exp_in_field')}
            onChange={(e) => setValue('exp_in_field', e.target.checked)}
            className="rounded-lg shadow-md"
          />

          {/* Show additional experience fields only if exp_in_field is true */}
          {expInField && (
            <>
              <Input
                label="Previous Organization Name"
                {...register('prev_organization_name', { required: 'Previous organization is required' })}
                error={!!errors.prev_organization_name}
                className="rounded-lg shadow-md"
              />

              <Input
                label="Total Experience (in years)"
                type="number"
                {...register('total_exp', {
                  required: 'Total experience is required',
                  min: { value: 0, message: 'Experience cannot be negative' }
                })}
                error={!!errors.total_exp}
                className="rounded-lg shadow-md"
              />
              {errors.total_exp && (
                <Typography variant="small" color="red">
                  {errors.total_exp.message}
                </Typography>
              )}
            </>
          )}

          <Button type="submit" fullWidth className="rounded-lg shadow-md">
            Submit
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
