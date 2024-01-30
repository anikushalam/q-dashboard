import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";
import style from "./ProductCard.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

function ProductCard({ img, heading, text, handleclick, link }) {
  const router = useRouter();
  const childClicked = (event) => {
    event.stopPropagation();
    router.push(link);
  };
  return (
    <>
      <div
        className={style.cardContainer}
        onClick={handleclick ? handleclick : ""}
      >
        <div className={style.card}>
          <LazyImg loading="lazy" effect="blur" src={img} alt="" />
          <h4>{heading}</h4>
          <p>{text}</p>
        </div>

        {heading === "Customized Department and Classes" ? (
          <div className={style.cardbottom}>
            <p className={style.viewP}>View Details</p>
          </div>
        ) : (
          <div className={style.cardbottom} onClick={childClicked}>
            <p className={style.viewP}>View Details</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductCard;
