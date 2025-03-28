import Button from "@/components/Button";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');


  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      router.push("/");
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  };
  
  const handleKakaoLogin = async () => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;
    window.location.href = KAKAO_AUTH_URL;
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            로그인
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="id" className="block text-sm font-medium text-gray-700">
                  아이디
              </label>
              <input
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                type="text"
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="아이디를 입력하세요"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              비밀번호
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>

            <div className="flex items-center justify-between">
            <Button
              type="button"
              variant="secondary"
              onClick={() => router.back()}
            >
              돌아가기
            </Button>
            <Button
              type="submit"
              variant="primary"
            >
              로그인하기
            </Button>
          </div>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">또는</span>
          </div>
        </div>

        <Button
          type="button"
          variant="outline"          
          onClick={handleKakaoLogin}
          className="w-full flex items-center justify-center space-x-2 bg-[#FEE500] border-[#FEE500] text-[#000000] hover:bg-[#FEE500]/90"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4C7.32 4 3.5 7.83 3.5 12.5C3.5 15.17 4.51 17.66 6.24 19.5H4.26C3.81 18.83 3.5 18 3.5 17.17C3.5 15.92 4.08 14.82 5.04 14.04C4.5 13.37 4.26 12.53 4.26 11.67C4.26 9.66 5.88 8.04 7.89 8.04C8.88 8.04 9.78 8.38 10.5 8.96C11.22 8.38 12.12 8.04 13.11 8.04C15.12 8.04 16.74 9.66 16.74 11.67C16.74 12.53 16.5 13.37 15.96 14.04C16.92 14.82 17.5 15.92 17.5 17.17C17.5 18 17.19 18.83 16.74 19.5H14.76C16.49 17.66 17.5 15.17 17.5 12.5C17.5 7.83 13.68 4 12 4Z"/>
          </svg>
          <span>카카오로 계속하기</span>
        </Button>


      </div>
    </div>
  );
}