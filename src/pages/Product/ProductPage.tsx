import { useParams } from "@tanstack/react-router";
import "./styles.css";

type Data = {
  [key: string]: {
    product: string;
    top: string;
    image1: string;
    image2: string;
    feature1: string;
    description1: string;
    feature2: string;
    description2: string;
  };
};

export default function ProductPage() {
  const data: Data = {
    PelotonBike: {
      product: "Peloton Bike",
      top: "Explore Bike > Shop Bike",
      image1:
        "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/6YDukopU3DCBth2ayB1fY/98afbd6bad924663e301931c08233d79/Bike_V1.jpeg",
      image2:
        "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/5CEzcKls5slkb9VVJi4Aca/93ec5835f281aca20c030e03b46f4167/bike-side-02.jpg",
      feature1: "Compact Footprint",
      description1:
        "Compact 4' x 2' footprint, smaller than your average yoga mat.",
      feature2: "Immersive touchscreen",
      description2:
        'This 21.5" screen gives you a front-row seat in every class.',
    },
    "PelotonBike+": {
      product: "Peloton Bike+",
      top: "Explore Bike+ > Shop Bike+",
      image1:
        "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/570NDQUa4nJVo466mxbUuv/f55258ef9420c35a68da5d5f22146184/20_5632_PELOTON_BIKE_RENDERS_TITAN-ALT_M_BOTH_W1_F_LAYERED_NO_WEIGHTS.jpg",
      image2:
        "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/1OMHxyeErL90MJ0Eamfwvg/92f860480ce57bed4dcae7d66aea1ee8/Bike-Plus-Gallery-Item-2.jpg",
      feature1: "Auto-resistance knob",
      description1:
        "Automatically adjusts to match instructor recommendations.",
      feature2: "Rotating touchscreen",
      description2:
        '23.8" with 360° of movement for easy transitions to strength, yoga, and more.',
    },
  };
  const { productId } = useParams({ from: "/product/$productId" });
  const {
    image1,
    image2,
    product,
    feature1,
    description1,
    feature2,
    description2,
  } = data[productId];
  return (
    <main className="">
      <div className="py-[15px] text-[13px] text-[#181a1d] pl-[15%]">
        {data[productId].top}
      </div>
      <div className="main-container flex justify-center gap-x-[55px]">
        <div className="product-container max-w-[768px]">
          <div className="flex gap-x-[15px] image-container">
            <div>
              <img src={image1} />
            </div>
            <div>
              <img src={image2} />
            </div>
          </div>
          <div className="flex bg-[#f5f7f9] review-container">
            <div className="flex-grow flex flex-col justify-center p-5 gap-y-[10px]">
              <p className="text-center font-bold text-[#181a1d]">{feature1}</p>
              <p className="text-center text-[#181a1d]">{description1}</p>
            </div>
            <div className="flex-grow flex flex-col justify-center p-5 gap-y-[10px]">
              <p className="text-center font-bold text-[#181a1d]">{feature2}</p>
              <p className="text-center text-[#181a1d]">{description2}</p>
            </div>
          </div>
        </div>
        <div className="cart-container flex-grow max-w-[392px] ">
          <h2 className="text-[30px] leading-[34px] font-bold">{product}</h2>
          <button className="my-[15px] bg-[#df1c2f] text-center w-full h-[48px] rounded-md text-white font-semibold">
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}
