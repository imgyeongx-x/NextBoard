import { useRouter } from "next/router";


export default function SignupPage() {
  const router = useRouter();
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900">
            회원가입
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            이미 계정이 있으신가요?{' '}
            <button
              onClick={() => router.push('/loginPage')}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              로그인하기
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
