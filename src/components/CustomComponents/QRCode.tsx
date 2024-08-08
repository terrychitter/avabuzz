import avabuzzQR from "../../assets/avabuzz_qr.svg";

const QRCode = () => {
  return (
    <img
      src={avabuzzQR}
      alt="QR Code"
      width="110px"
      height="auto"
      style={{ borderRadius: "5px" }}
    />
  );
};

export default QRCode;
