import Link from "next/link";
import { Icon } from '@iconify/react';

const BottomNavbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/timer">
            <Icon icon="ic:baseline-access-time-filled" style={{ fontSize: '2rem'}}/>
          </Link>
        </li>
        <li>
          <Link href="/schedule">
            <Icon icon="uis:schedule" style={{ fontSize: '2rem'}}/>
          </Link>
        </li>
        <li>
          <Link href="/peppi">
            <Icon icon="mdi:bird" style={{ fontSize: '2rem'}}/>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        nav {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: transparent;
          text-decoration: none;
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
          text-decoration: none;
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
