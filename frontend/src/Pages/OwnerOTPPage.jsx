import React, { useState, useRef, useEffect } from 'react';
import { Input, Typography, Button, Card } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { ownerOtpSuccess, ownerOtpFail } from '../redux/Slices/HouseOwnerSlices';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function OwnerOTPPage() {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(Array(6).fill(''));
  const { otpSuccess, otpError } = useSelector((state) => state.houseOwner);
  const navigate = useNavigate();
  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value.replace(/[^0-9a-zA-Z]/g, '');
    setOtp(newOtp);

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  function handleBackspace(event, index) {
    if (event.key === 'Backspace' && !event.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  }
  const isOtpComplete = otp.every((digit) => digit !== '');

  const dispatch = useDispatch();
  const verifyOTP = async () => {
    const myForm = new FormData();
    myForm.set('otp', otp);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      };
      let res = '';
      if (import.meta.env.VITE_DEV_MODE == 'production') {
        res = await axios.post(`${import.meta.env.BACKEND_URL}/api/v1/owner/validateOTP`, myForm, config);
      } else {
        res = await axios.post(`/api/v1/owner/validateOTP`, myForm, config);
      }
      dispatch(ownerOtpSuccess(res.data));
    } catch (error) {
      dispatch(ownerOtpFail(error?.response.data.message));
    }
  };

  useEffect(() => {
    if (otpSuccess) {
      toast.success('');
      navigate('/owner-profile');
    }
    if (otpError) {
      toast.error(otpError);
    }
  }, [otpSuccess, otpError, navigate]);
  return (
    <Card className="w-full h-screen flex items-center justify-center">
      <Typography
        variant="paragraph"
        color="blue-gray"
        className="flex items-center justify-center gap-1 text-center font-medium"
      >
        Enter the 6-digit OTP sent to your email. <br /> This code will be expire in 15 minutes
      </Typography>

      <div className="my-4 flex items-center justify-center gap-2">
        {otp.map((digit, index) => (
          <React.Fragment key={index}>
            <Input
              type="text"
              maxLength={1}
              className="!w-10 appearance-none !border-t-blue-gray-200 text-center !text-lg placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-primaryText"
              labelProps={{
                className: 'before:content-none after:content-none'
              }}
              containerProps={{
                className: '!min-w-0 !w-10 !shrink-0'
              }}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleBackspace(e, index)}
              inputRef={(el) => (inputRefs.current[index] = el)}
            />
            {index === 2 && <span className="text-2xl text-slate-700">-</span>}
          </React.Fragment>
        ))}
      </div>
      <Button
        onClick={verifyOTP}
        disabled={!isOtpComplete}
        className={`w-60 mt-6 text-lg ${
          isOtpComplete ? 'bg-primaryText text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'
        }`}
      >
        Verify
      </Button>
      <Typography variant="small" className="text-center font-normal text-secondaryText mt-4">
        Did not receive the code? <span className="font-bold">Resend</span>
      </Typography>
    </Card>
  );
}
