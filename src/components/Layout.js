import Link from "next/link";

import { useAuthState, useAuthDispatch } from "../context/auth";

export default function Layout({ children }) {
  const { isAuthenticated, user } = useAuthState();
  const { logout } = useAuthDispatch();

  return (
    <>
      <header className="bg-primary-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between py-6">
            <div className="flex space-x-1">
              <Link href="/">
                <a className="text-gray-100 hover:text-white">Home</a>
              </Link>
              {isAuthenticated ? (
                <span className="flex space-x-1">
                  <Link href="/edit-profile">
                    <a className="text-gray-100 hover:text-white">
                      {user.name}
                    </a>
                  </Link>
                  <button
                    onClick={logout}
                    className="appearance-none text-gray-100 hover:text-white"
                  >
                    Logout
                  </button>
                  <Link href="/new">
                    <a className="text-gray-100 hover:text-white">
                      Post new thread
                    </a>
                  </Link>
                </span>
              ) : (
                <>
                  <Link href="/login">
                    <a className="text-gray-100 hover:text-white">Login</a>
                  </Link>
                  <Link href="/register">
                    <a className="text-gray-100 hover:text-white">Register</a>
                  </Link>
                </>
              )}
            </div>
            <div className="flex items-center space-x-3">
              <Link href="/today">
                <a className="text-gray-100 hover:text-white">Today's Posts</a>
              </Link>
              <Link href="/answered">
                <a className="text-gray-100 hover:text-white">Answered Posts</a>
              </Link>
              <Link href="/unanswered">
                <a className="text-gray-100 hover:text-white">
                  Uanswered Posts
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">{children}</div>
    </>
  );
}
