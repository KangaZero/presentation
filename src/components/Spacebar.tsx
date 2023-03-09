import Link from "next/link";

const Spacebar: React.FC = () => {
  return (
    <Link href="/">
      <button className="spacebar-btn">
        <span>ホーム</span>
      </button>
    </Link>
  );
};

export default Spacebar;
