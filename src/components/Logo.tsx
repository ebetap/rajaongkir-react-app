import { logoKurirDomestik } from "../constant/mockData";

const Logo = () => {
  return (
    <div className="flex mt-6 gap-9 flex-wrap">
      <div className="avatar">
        <div className="w-24 max-h-5 object-contain rounded">
          <img
            src="https://storage.googleapis.com/komerce/assets/LP-Komship/JNE.svg"
            alt="Logo Kurir"
          />
        </div>
      </div>

      <div className="avatar">
        <div className="w-9 max-h-5 object-contain rounded">
          <img
            src="https://storage.googleapis.com/komerce/rajaongkir/pos.jpg"
            alt="Logo Kurir"
          />
        </div>
      </div>

      <div className="avatar">
        <div className="w-9 max-h-5 object-contain rounded">
          <img
            src="https://storage.googleapis.com/komerce/rajaongkir/esl.jpg"
            alt="Logo Kurir"
          />
        </div>
      </div>

      <div className="avatar">
        <div className="w-24 max-h-5 object-contain rounded">
          <img
            src="https://storage.googleapis.com/komerce/rajaongkir/tiki.jpg"
            alt="Logo Kurir"
          />
        </div>
      </div>

      <div className="avatar">
        <div className="w-9 max-h-5 object-contain rounded">
          <img
            src="https://storage.googleapis.com/komerce/rajaongkir/pcp.jpg"
            alt="Logo Kurir"
          />
        </div>
      </div>

      <div className="avatar">
        <div className="w-9 max-h-5 object-contain rounded">
          <img
            src="https://storage.googleapis.com/komerce/rajaongkir/rpx.jpg"
            alt="Logo Kurir"
          />
        </div>
      </div>
    </div>
  );
};
export default Logo;
