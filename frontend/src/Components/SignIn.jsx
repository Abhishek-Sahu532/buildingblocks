import { useState } from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Input, Button, Dialog, DialogBody } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [activeTab, setActiveTab] = useState('House Owner');
  const [signInOpen, setSignInOpen] = useState(false);
  const handleSignInOpen = () => {
    setSignInOpen(!signInOpen);
  };
  return (
    <>
      <Button className="bg-transparent shadow-none hover:shadow-none text-indigo-200" onClick={handleSignInOpen}>
        Sign In
      </Button>

      <Dialog
        open={signInOpen}
        handler={handleSignInOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 }
        }}
      >
        <DialogBody className="relative">
          <div className="absolute right-10">
            <Button variant="text" className="shadow-none   text-xl " onClick={handleSignInOpen}>
              X
            </Button>
          </div>

          <div className="mt-20 flex justify-evenly ">
            <Tabs value={activeTab}>
              <TabsHeader
                className="rounded-sm font-sans bg-transparent p-0"
                indicatorProps={{
                  className: 'bg-transparent border-b-2 border-gray-900 shadow-none rounded-none'
                }}
              >
                <Tab
                  value={'House Owner'}
                  onClick={() => setActiveTab('House Owner')}
                  className={activeTab === 'House Owner' ? 'text-gray-900' : ''}
                >
                  House Owner
                </Tab>

                <Tab
                  value={'Agent'}
                  onClick={() => setActiveTab('Agent')}
                  className={activeTab === 'Agent' ? 'text-gray-900' : ''}
                >
                  Agent
                </Tab>
              </TabsHeader>

              <TabsBody>
                <TabPanel value={'House Owner'}>
                  <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                    <div className="flex flex-col gap-4 p-6">
                      <div className="relative h-11 w-full min-w-[200px]">
                        <div className="relative h-11 w-full min-w-[200px]">
                          <Input
                            type="email"
                            label="Email"
                            placeholder="abc@abc.com"
                            className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <Button
                        className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                      >
                        Sign In
                      </Button>
                      <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
                        Don&apos;t have an account?
                        <Link
                          to="/signup"
                          className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900"
                        >
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={'Agent'}>
                  <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                    <div className="flex flex-col gap-4 p-6">
                      <div className="relative h-11 w-full min-w-[200px]">
                        <Input
                          type="email"
                          label="Email"
                          placeholder="abc@abc.com"
                          className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        />
                      </div>
                      <div className="relative h-11 w-full min-w-[200px]">
                        <Input
                          type="password"
                          label="Password"
                          placeholder="********"
                          className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        />
                      </div>

                      <div className="-ml-2.5">
                        <div className="inline-flex items-center">
                          <label
                            htmlFor="checkbox"
                            className="relative flex items-center p-3 rounded-full cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                              id="checkbox"
                            />
                            <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="1"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </label>
                          <label
                            className="mt-px font-light text-gray-700 cursor-pointer select-none"
                            htmlFor="checkbox"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <Button
                        className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                      >
                        Sign In
                      </Button>
                      <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
                        Don&apos;t have an account?
                        <Link
                          to="/agent-signup"
                          className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900"
                        >
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </div>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default SignIn;
