import Button from "@components/Button/Button";
import MainCard from "@components/MainCard/MainCard";

export default function IndexPage() {
  const data = [
    {
      title: "Peloton Bike+",
      description:
        "Our most advanced Bike with a larger rotating screen, auto-resistance, and more.",
      cost: "$2,495",
      subtext:
        "$44/mo Peloton All-Access Membership required to access full content on the Peloton Bike+.",
      imageUrl:
        "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/wE0xDKnYxrha5Z7PWemsX/fd26bfadf5df9026d17c990b2feeecf7/Homepage_bikeplus.png",
    },
    {
      title: "Peloton Bike",
      description: "The original motivating cardio machine loved by millions.",
      cost: "$1,445",
      subtext:
        "$44/mo Peloton All-Access Membership required to access full content on the Peloton Bike.",
      imageUrl:
        "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/2GCUTSr0mYOyutMyP7L2Uf/5cf23ca4b5867921e0429b5eee68236e/Homepage_bike.png",
    },
  ];

  return (
    <>
      <div
        className="w-full bg-cover flex"
        style={{
          height: "600px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage:
            "url(https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_1024/https://images.ctfassets.net/7vk8puwnesgc/6Chkl4XmKkDeGjBsf1EMs1/59ee77cd5c845d49539458522bb9da2c/Hero_Large_-_Walking_USandCA.jpg)",
        }}
      >
        <div className="flex flex-col w-[680px] m-auto text-white items-center">
          <span className="text-[1.125rem] font-semibold">
            Peloton Tread &amp; Tread+
          </span>
          <h1 className="text-[2.5rem] font-bold text-center">
            Walk it out with our wide range of walking classes
          </h1>
          <div className="flex gap-4">
            <Button
              type="main"
              backgroundColor="rgb(205,255,56)"
              text="Shop Tread"
              fontColor="black"
            />
            <Button type="main" text="Shop Tread+" />
          </div>
        </div>
      </div>
      <div className="max-lg:px-0 px-[40px] py-[24px] flex justify-center gap-[20px] bg-[#F5F7F9] max-lg:flex-col">
        {data.map((card) => (
          <MainCard {...card} />
        ))}
      </div>
    </>
  );
}
