
import { Input, Typography } from "@material-tailwind/react";

const From = () => {
  return (
    <div>
      <div className="w-full flex justify-center mx-auto">
        <div className="grid md:grid-cols-2 gap-12   p-5">
          <figure className="relative  md:w-[450px] w-full mx-auto">
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
          <div className=" flex  items-center   p-2  bg-gray-100 shadow-sm rounded-sm">
            <div className=" space-y-3 w-fll md:w-[450px] mx-auto p-3 ">
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

      <div className="grid md:grid-cols-2 gap-5 py-12 px-5">
        <Input variant="standard">
          <label className="text-lg">Enter Name ..</label>
        </Input>
        <Input variant="standard">
          <label className="text-lg">Enter Address ..</label>
        </Input>
        <Input variant="standard">
          <label className="text-lg">Contract</label>
        </Input>
        <Input variant="standard">
          <label className="text-lg">Any Message</label>
        </Input>
      </div>
    </div>
  );
};

export default From;
