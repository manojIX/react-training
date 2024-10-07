import Button from "@components/Button/Button";
import MainCard from "@components/MainCard/MainCard";
import "./styles.css";

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
      url: "/product/PelotonBike+",
    },
    {
      title: "Peloton Bike",
      description: "The original motivating cardio machine loved by millions.",
      cost: "$1,445",
      subtext:
        "$44/mo Peloton All-Access Membership required to access full content on the Peloton Bike.",
      imageUrl:
        "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/2GCUTSr0mYOyutMyP7L2Uf/5cf23ca4b5867921e0429b5eee68236e/Homepage_bike.png",
      url: "/product/PelotonBike",
    },
    {
      title: "Peloton Tread+",
      description: "The ultimate treadmill experience.",
      cost: "$5,995",
      subtext:
        "$44/mo Peloton All-Access Membership required to access full content on the Peloton Tread+.",
      imageUrl:
        "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/y2Vcgqd9s2i984Ba83imv/d3d6f6d31ffd76788ffb561d511c5742/product-card-treadplus.png ",
      url: "/product/PelotonTread+",
    },
    {
      title: "Peloton Tread",
      description:
        "Built to go the extra mile and keep you focused on the road ahead.",
      cost: "$2,995",
      subtext:
        "$44/mo Peloton All-Access Membership required to access full content on the Peloton Tread.",
      imageUrl:
        "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/4kdWjFVtFNSfGjYmFpmGCU/e9aebab780a801e10c2d33bd49771a46/tread-card.jpg",
      url: "/product/PelotonTread",
    },
    {
      title: "Peloton Row",
      description:
        "Our most efficient workout yet with form features to make you a better rower.",

      cost: "$3,295",
      subtext:
        "$44/mo Peloton All-Access Membership required to access full content on the Peloton Tread.",
      imageUrl:
        "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/3MysN3ZLH5iDn3RJg0nU9e/a3d60b4f5b812157d64b75b7b942ae2a/row-product-card.jpg",
      url: "/product/PelotonRow",
    },
    {
      title: "Peloton App",
      description:
        "Access strength, Pilates, meditation, cardio classes, and more on the App.",
      subtext:
        "Get the Peloton App for free. Paid membership starts at $12.99/mo.*",
      imageUrl:
        "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/T69AXQ4sQdFRnoyIBau1P/9a5dc3ec3a9a926abeb36fc12fc503d1/Product_Images_Cards_smaller.png",
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
          <h1 className="text-[2.5rem] font-bold text-center py-[15px]">
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
      <div className="flex-wrap max-lg:px-0 px-[40px] py-[24px] flex justify-center gap-[20px] bg-[#F5F7F9] max-lg:flex-col">
        {data.map((card) => (
          <MainCard {...card} />
        ))}
      </div>
      <div className="gift-section-wrapper">
        <section className="gift-section rounded-xl">
          <div className="text-content flex flex-col">
            <h2 className="pt-[10px] font-black text-3xl text-center">
              Gift Cards
            </h2>
            <p className="pt-[16px] mx-auto text-center font-light color-[#65666A] w-[440px]">
              Shop gift cards to redeem on Peloton equipment, accessories, and
              memberships.
            </p>
            <button className="mx-auto mt-[24px] px-[24px] py-[5.125px] border-black border-[3px] rounded-md hover:text-white hover:bg-black">
              Explore
            </button>
            <p className="pt-[24px] text-[] mx-auto font-light text-center max-w-[520px]">
              Redeemable at onepeloton.com and at participating Peloton stores
              only. Please note that these gift cards cannot be redeemed at
              apparel.onepeloton.com.
            </p>
          </div>
          <img src="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/3u157P4AS9qZt3KkDZuln0/58734dc8b02978d685e7b64531b41f1e/GC-product-block.jpg" />
        </section>
      </div>
      <div className="quiz-section">
        <div className="title text-center">Find your Peloton Instructor</div>
        <button className="bg-white">Take quiz</button>
      </div>
      <div className="blog-section">
        <div className="title">
          <h4 className="font-sans text-[18px] text-center leading-[22px] text-[#65666a] font-semibold">
            Peleton Blog
          </h4>
          <h3 className="mb-[70px] font-sans text-[36px] text-center leading-[48px]  font-semibold">
            Reach your goals with Peloton
          </h3>
        </div>
        <div className="blog-container">
          <div className="mb-[70px] card-img bg-[url('https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_256/https://images.ctfassets.net/7vk8puwnesgc/7AG9vk63T88Xs69QwNGtbm/36d514723dd231a5e3ac2b83c3ff095a/Peloton-LosAngeles-2023-04-27-CedricDanny-Shot4-04519_800x490.jpg')]">
            <div className="card">
              <h5 className="title text-center text-[#697180] font-semibold">
                The starting line
              </h5>
              <hr />
              <div className="description text-center text-[#65666a] w-[156px] mx-auto">
                How to get back into working out
              </div>
            </div>
          </div>
          <div className="mb-[70px] card-img bg-[url('https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_380/https://images.ctfassets.net/7vk8puwnesgc/3hKBg366U2U3KHyXm0p9fx/49dcbada93dd45ee1df5af89be2851b2/SHOT_3_02006_800x490__1_.jpg')]">
            <div className="card">
              <h5 className="title text-center text-[#697180] font-semibold">
                The long game
              </h5>
              <hr />
              <div className="description text-center text-[#65666a] w-[156px] mx-auto">
                12 tips to build a fitness routine
              </div>
            </div>
          </div>
          <div className="mb-[70px] card-img bg-[url('https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_380/https://images.ctfassets.net/7vk8puwnesgc/4trU163wF4CL4wmLkDMQNC/92d5dd9d561d369afd632e84339905dd/SHOT_23_08133_800x490.jpg')]">
            <div className="card">
              <h5 className="title text-center text-[#697180] font-semibold">
                The work
              </h5>
              <hr />
              <div className="description text-center text-[#65666a] w-[156px] mx-auto">
                New to running? Here's how
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="trial-section flex px-[40px] pb-[48px] gap-[24px]">
        <div className="flex-grow flex items-center">
          <div className="m-auto w-[464px] h-[290px]">
            <h4 className="leading-[20px] text-[#181a1d] font-bold ">
              Peloton App
            </h4>
            <h3 className="text-[32px] font-bold my-[16px]">
              Try free for 30 days
            </h3>
            <p className="text-[#181a1d] font-light">
              Take classes at home, in the gym, or on the go with no equipment
              needed.
            </p>
            <button className="bg-black text-white w-[240px] px-[22px] h-[40px] rounded-md font-semibold my-[24px]">
              Try 30 days free
            </button>
            <div>New paid memberships only. Terms apply.*</div>
          </div>
        </div>
        <img
          className="w-[45%]"
          src="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_375/https://images.ctfassets.net/7vk8puwnesgc/22REFM4Jco6tyizfJGXvY9/69ca63eb22bedd7a16889ef58a693a83/Peloton_App-Deals_Page_Image.png"
        />
      </div>
      <div className="flex flex-col gap-5 mb-[30px] disclaimer-section px-[48px] pt-[32px]  color-[#181a1d] font-light text-[13px]">
        <p>
          ¹Affirm: Get the Peloton Bike for as low as $120.42/mo over 12 months
          at 0% APR. Based on a price of $1,445. Get the Peloton Bike+ for as
          low as $207.92/mo over 12 months at 0% APR. Based on a price of
          $2,495. Get the Peloton Tread for as low as $249.59/mo over 12 months
          at 0% APR. Based on a price of $2,995. Get the Peloton Tread+ for as
          low as $499.58/mo over 12 months at 0% APR. Based on a price of
          $5,995. Get the Peloton Row for as low as $274.58/mo over 12 months at
          0% APR. Based on a price of $3,295. Get the Refurbished Peloton Bike
          for as low as $95.42/mo over 12 months at 0% APR. Based on a price of
          $1,145. Get the Refurbished Peloton Bike+ for as low as $166.25/mo
          over 12 months at 0% APR. Based on a price of $1,995. Your rate will
          be 0% APR or 4.99% APR based on eligibility. A down payment may be
          required. Payment options through Affirm are provided by these lending
          partners: affirm.com/lenders. See affirm.com/licenses for important
          info on state licenses and notifications. Peloton All-Access
          Membership (standard monthly pricing), accessories and taxes separate.
          Not available outside the U.S. Delivery restrictions apply. Additional
          delivery fees may apply outside of the continental U.S. Void where
          prohibited.
        </p>
        <p>
          *New App Members Only. Terms apply. Credit card required. After your
          free trial, App Membership is $12.99/mo. Cancel anytime before free
          trial ends.
        </p>
        <p>
          ²Program only available for the original Peloton Bike and Peloton
          Bike+ in the contiguous 48 states and may not be available in certain
          remote locations. Peloton Bike/Bike+ fee and cost of All-Access
          Membership billed automatically to your payment method in equal
          monthly installments until canceled. Can be canceled anytime by
          visiting our support site, but all amounts paid are nonrefundable.
          Cannot be combined with certain other offers. Void where prohibited.
          Peloton may modify, suspend or cancel the program at any time for any
          or no reason. See Terms and Conditions for details.
        </p>
        <p>
          ⁴Program only available for the Peloton Bike and Peloton Bike+ in the
          contiguous 48 states and may not be available in remote locations.
          Credit card required. Cancel anytime, provided that any amounts paid
          are non-refundable. Void where prohibited. See additional terms at
          www.onepeloton.com/rental-terms.
        </p>
        <p>
          ⁵Peloton Guide Membership separate: $24/mo for Guide-only Members.
        </p>
        <p>
          First time Bike, Bike+, Tread, or Row purchasers only. 1 trial per
          household. Upfront payment required. Return within 30 days of delivery
          for full refund, provided that interest amounts paid to Peloton
          financing partners may not be refunded. Only eligible in 48 contiguous
          states. Full terms at onepeloton.com/home-trial.
        </p>
        <p>
          Get the Refurbished Peloton Bike for as low as $95.42/mo over 12
          months at 0% APR. Based on a price of $1,145. Your rate will be 0% APR
          or 4.99% APR based on eligibility. A down payment may be required.
          Payment options through Affirm are provided by these lending partners:
          affirm.com/lenders. See affirm.com/licenses for important info on
          state licenses and notifications. Peloton All-Access Membership
          (standard monthly pricing), accessories and taxes separate. Not
          available outside the U.S. Delivery restrictions apply. Additional
          delivery fees may apply outside of the continental U.S. Void where
          prohibited.
        </p>
      </div>
    </>
  );
}
