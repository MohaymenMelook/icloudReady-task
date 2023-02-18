import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="leftBottomRectangle"></div>

      <div
        id="footer"
        className="bg-white text-center justify-content-center  "
      >
        <p className="">
          Got questions? Take a look at our <span>FAQs</span> , talk to us on
          Twitter <span>@icloudready</span> or send an email to{" "}
          <span>team@icloud-ready.com</span>
        </p>
      </div>
    </>
  );
}

export default Footer;
