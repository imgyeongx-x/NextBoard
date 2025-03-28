import { useRouter } from "next/router";
import Button from "./Button";


export default function HeaderButtons() {
  const router = useRouter();
  
  return (
    <div className="hidden md:flex space-x-4 items-center">
      <Button variant="secondary" onClick={() => router.push('/loginPage')}>
        로그인
      </Button>

      <Button variant="primary" onClick={() => router.push('/signupPage')}>
        회원가입
      </Button>
    </div>
  );
}