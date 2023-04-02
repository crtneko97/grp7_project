import Link from "next/link";

const BottomNavbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Timer
          </Link>
        </li>
        <li>
          <Link href="/handbook">
            Schema
          </Link>
        </li>
        <li>
          <Link href="/useStateExample">
            Peppi
          </Link>
        </li>
      </ul>

      <style jsx>{`
        nav {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: #f2f2f2;
          border-top: 1px solid #e6e6e6;
        }

        ul {
          display: flex;
          justify-content: space-around;
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        li {
          flex: 1;
          text-align: center;
          padding: 1rem 0;
        }

        a {
          color: #333;
          text-decoration: none;
          font-weight: bold;
        }
      `}</style>
    </nav>
  );
};

export default BottomNavbar;
