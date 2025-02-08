import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Input, Button, Card, CardBody, Typography, Switch } from '@material-tailwind/react';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const AddProperty = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const [lookingTo, setLookingTo] = useState('');
  const [bhk, setBhk] = useState('');
  const [furnishedType, setFurnishedType] = useState('');
  const [constructionStatus, setConstructionStatus] = useState('');

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

  const lookingToOption = [
    { value: 'BUY', label: 'BUY' },
    { value: 'RENT', label: 'RENT' },
    { value: 'PG_COLIVING', label: 'PG_COLIVING' }
  ];

  const bhkOptions = [
    { value: 'RK_1', label: 'RK_1' },
    { value: 'BHK_1', label: 'BHK_1' },
    { value: 'BHK_2', label: 'BHK_2' },
    { value: 'BHK_3', label: 'BHK_3' }
  ];

  const furnishedTypeOptions = [
    { value: 'FULLY_FURNISHED', label: 'FULLY_FURNISHED' },
    { value: 'SEMI_FURNISHED', label: 'SEMI_FURNISHED' },
    { value: 'UNFURNISHED', label: 'UNFURNISHED' }
  ];

  //will use radio button for this
  const constructionStatusOption = [
    { value: 'READY_TO_MOVE', label: 'READY_TO_MOVE' },
    { value: 'UNDER_CONSTRUCTION', label: 'UNDER_CONSTRUCTION' }
  ];

  const addPropertyHandler = () => {};
  return (
    <Card className="max-w-lg mx-auto my-10 p-6 shadow-lg">
      <CardBody>
        <Typography variant="h4" className="text-center mb-4">
          Agent Registration
        </Typography>
        <form onSubmit={handleSubmit(addPropertyHandler)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Owner Name"
              {...register('owner_name', { required: 'First name is required' })}
              error={!!errors.owner_name}
              className="rounded-lg shadow-md"
            />
            <Input
              label="Mobile Number"
              type="number"
              {...register('mobile_number', { required: 'Last name is required' })}
              error={!!errors.mobile_number}
              className="rounded-lg shadow-md"
            />
          </div>

          <Input
            label="Address"
            {...register('address', { required: 'Address is required' })}
            className="rounded-lg shadow-md"
          />
          <Input
            label="Locality"
            {...register('locality', { required: 'Locality is required' })}
            className="rounded-lg shadow-md"
          />
          {/* address drop down */}
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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Typography variant="small" className="mb-1">
                Looking To
              </Typography>
              <Controller
                name="lookingTo"
                control={control}
                rules={{ required: 'Looking To is required' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={lookingToOption}
                    placeholder="Select Option"
                    isSearchable
                    value={lookingToOption.find((option) => option.value === field.value)}
                    onChange={(selectedOption) => {
                      field.onChange(selectedOption?.value);
                      setLookingTo(selectedOption.value);
                    }}
                    className="rounded-lg shadow-md"
                  />
                )}
              />
              {errors.city && (
                <Typography variant="small" color="red">
                  {errors.lookingTo.message}
                </Typography>
              )}
            </div>

            <div>
              <Typography variant="small" className="mb-1">
                State
              </Typography>
              <Controller
                name="BHK"
                control={control}
                rules={{ required: 'BHK is required' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={bhkOptions}
                    placeholder="Select BHK"
                    isSearchable
                    value={bhkOptions.find((option) => option.value === field.value)}
                    onChange={(selectedOption) => {
                      field.onChange(selectedOption?.value);
                      setBhk(selectedOption.value);
                    }}
                    className="rounded-lg shadow-md"
                  />
                )}
              />
              {errors.state && (
                <Typography variant="small" color="red">
                  {errors.BHK.message}
                </Typography>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Typography variant="small" className="mb-1">
                Furnished Type
              </Typography>
              <Controller
                name="furnishedType"
                control={control}
                rules={{ required: 'furnishedType is required' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={furnishedTypeOptions}
                    placeholder="Select Option"
                    isSearchable
                    value={furnishedTypeOptions.find((option) => option.value === field.value)}
                    onChange={(selectedOption) => {
                      field.onChange(selectedOption?.value);
                      furnishedTypeOptions(selectedOption.value);
                    }}
                    className="rounded-lg shadow-md"
                  />
                )}
              />
              {errors.city && (
                <Typography variant="small" color="red">
                  {errors.furnishedType.message}
                </Typography>
              )}
            </div>

            <div>
              <Typography variant="small" className="mb-1">
                State
              </Typography>
              <Controller
                name="BHK"
                control={control}
                rules={{ required: 'BHK is required' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={bhkOptions}
                    placeholder="Select BHK"
                    isSearchable
                    value={bhkOptions.find((option) => option.value === field.value)}
                    onChange={(selectedOption) => {
                      field.onChange(selectedOption?.value);
                      setBhk(selectedOption.value);
                    }}
                    className="rounded-lg shadow-md"
                  />
                )}
              />
              {errors.state && (
                <Typography variant="small" color="red">
                  {errors.BHK.message}
                </Typography>
              )}
            </div>
          </div>

          {/* <Input
            label="Mobile Number"
            {...register('mobile_number', { required: 'Mobile number is required' })}
            error={!!errors.mobile_number}
            className="rounded-lg shadow-md"
          /> */}

          <div>
            <Typography variant="small" className="mb-2">
              Photos
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

          {/* Toggle Experience in Field */}

          <Button type="submit" fullWidth className="rounded-lg shadow-md">
            Submit
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default AddProperty;
