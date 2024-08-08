import avabuzzQR from "../../assets/avabuzz_qr.svg";

const QRCode = () => {
  return (
    <img
      src={avabuzzQR}
      alt="QR Code"
      width="105px"
      height="auto"
      style={{ borderRadius: "5px", margin: "0 auto" }}
    />
  );
};

export default QRCode;
