import Link from "next/link";
import Image from "next/image";
import HeaderButtons from "./HeaderButtons";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* 왼쪽: 로고와 네비게이션 */}
          <div className="flex items-center space-x-12">
            {/* 로고 */}
            <Link 
              href="/" 
              className="flex items-center transition-transform hover:scale-105"
            >
              <Image 
                src="/globe.svg" 
                alt="logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
            </Link>

            {/* 네비게이션 */}
            <nav className="flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
              >
                홈
              </Link>
              <Link 
                href="/board" 
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
              >
                게시판
              </Link>
            </nav>
          </div>

          {/* 오른쪽: 로그인/회원가입 버튼 */}
          <HeaderButtons />
        </div>
      </div>
    </header>
  );
}

