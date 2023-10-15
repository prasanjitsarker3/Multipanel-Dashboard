import { Button, Input, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const UserFrom = () => {
    const history =useNavigate();

    const handleGoBack = () => {
      history.goBack();
    //   history(-1);
    };
  return (
    <div className=" bg-blue-gray-50 md:w-1/2 mx-auto rounded-md">
      <div className=" flex justify-center w-full mx-auto mt-12 p-3">
        <div className="flex flex-col md:flex-row justify-center gap-5 ">
          <figure className="relative w-full md:md:w-1/2 mx-auto">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="nature image"
            />
            <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div>
                <Typography variant="h5" color="blue-gray">
                  Sara Lamalo
                </Typography>
                <Typography color="gray" className="mt-2 font-normal">
                  20 July 2022
                </Typography>
              </div>
              <Typography variant="h5" color="blue-gray">
                Growth
              </Typography>
            </figcaption>
          </figure>
          <div className=" md:md:w-1/2 mx-auto ">
            <div className=" space-y-3 w-fll  mx-auto p-5 bg-deep-orange-50 rounded shadow-md py-10">
              <h1 className=" text-2xl font-semibold text-gray-800 text-center">
                Barnsbury, United Kingdom
              </h1>
              <h1 className=" text-lg text-gray-800">
                Caledonian Road passes for From a mile and a half north–south
                through the London Borough of Islington. It connects North
                London, from Camden Road near its junction with Holloway Road,
                and central Lon
              </h1>
              <div className=" flex justify-around">
                <h1>12/09/2035, 9 AM</h1>
                <h1>Something</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid md:grid-cols-2 w-full  gap-6 pt-12 mx-auto p-5 ">
        <Input variant="standard" label="Enter Name" />
        <Input variant="standard" label="Enter Address" />
        <Input variant="standard" label="Enter Contract" />
        <Input variant="standard" label="Question ?" />
        <Button  className="md:mx-12 " color="blue">Apply Now</Button>
        <Button onClick={handleGoBack}  className="md:mx-12" color="red">Back page</Button>
      </div>
      
    </div>
  );
};

export default UserFrom;
