import "./styles.css";

export default function Footer() {
  return (
    <footer>
      <hr />
      <div></div>
      <div></div>
      <div className="footer-links flex flex-wrap p-[18px] bg-[#f5f7f9] min-h-[50px] gap-[20px]">
        <p>Privacy Policy</p>
        <p>Terms of service</p>
        <p>Membership Terms</p>
        <p>IP Policy</p>
        <p>Cookie Settings</p>
        <p>Accessibility</p>
        <p>California Transparency Act</p>
        <p>
          © Peloton 2012-2024, Peloton Interactive, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
