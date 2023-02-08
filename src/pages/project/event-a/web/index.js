import style from "./web.module.css";

export default function EventWeb() {
  return (
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1 h-full max-w-full">
          <div className={style.wrapper}>
            <div className={style.whiter}>
              <div className={style.header}>
                <div className="text-xl text-black font-black">
                  L<span className="text-red-600">O</span>GO
                </div>
                <div>
                  <div className="h-[2px] w-4 bg-black my-1" />
                  <div className="h-[2px] w-4 bg-black my-1" />
                </div>
              </div>
              <div className="mt-4 text-center text-xl font-extrabold text-red-600 drop-shadow-lg">
                PILIH CARA BARU &
                <br />
                JADIIN SERUNYA
              </div>
              <div className="mt-2 text-black font-bold text-lg text-center">
                Pilih hadiah kamu
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
