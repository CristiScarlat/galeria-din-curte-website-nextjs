import data from "../data/data.json";
import Slider from "./slider";

const Portret = () => {
  return (
    <>
      {data.portret.map((obj) => (
        <div key={obj?.title} style={{ margin: "auto" }}>
          <h4>{obj?.title}</h4>
          {obj?.items?.map((item) => (
            <>
              <Slider
                images={item?.images?.map(
                  (img) => `/images/${item.dir}/${img}`
                )}
                title={item.title}
              />
              <div className="mb-3" />
            </>
          ))}
          <hr style={{ marginTop: 0 }} />
        </div>
      ))}
    </>
  );
};

export default Portret;
