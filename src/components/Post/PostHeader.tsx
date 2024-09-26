import VerifiedCheckmark from "@assets/VerifiedCheckmark.svg";

type Props = { profile_url: string; profile_name: string; isVerified: boolean };
export default function PostHeader(props: Props) {
  const { profile_url, profile_name, isVerified } = props;
  return (
    <div className="flex items-center h-[48px] border-b-[1px] px-[12px]">
      <img
        className="w-[24px] h-[24px]  p-[1px] rounded-full object-cover"
        src={profile_url}
      />
      <span className="inline-flex items-center px-[8px]">
        {profile_name} {isVerified && <img src={VerifiedCheckmark} />}
      </span>
    </div>
  );
}
