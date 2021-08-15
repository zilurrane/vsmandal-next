import Link from "next/link";

const Card = ({ title, children, link }) => {
  return (
    <div class={`card-body`}>
      <h4 class={`card-title`}>{title}</h4>
      <p class={`card-text`}>{children}</p>
      <Link href={`#`}>
        <a class={`btn btn-primary`}>{link}</a>
      </Link>
    </div>
  );
};

export default Card;
