import Button from '@/components/Button';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="h-[calc(100vh-30px)] bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 메인 섹션 */}
        <div className="flex flex-col items-center justify-center h-full text-center pt-40">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            환영합니다!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
            사내 연습용 게시판입니다.
          </p>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
            <Button 
              variant="primary"
              size="lg"
              onClick={() => router.push('/board')}
              className="animate-bounce-subtle"
            >
              게시판 둘러보기
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => router.push('/login')}
            >
              로그인하기
            </Button>
          </div>

          {/* 특징 섹션 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-indigo-600 text-2xl mb-2">✨</div>
              <h3 className="text-lg font-semibold mb-2">자유로운 소통</h3>
              <p className="text-gray-600">다양한 주제로 대화를 나눠보세요</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-indigo-600 text-2xl mb-2">🤝</div>
              <h3 className="text-lg font-semibold mb-2">경험 공유</h3>
              <p className="text-gray-600">서로의 경험을 공유하며 성장해요</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-indigo-600 text-2xl mb-2">💡</div>
              <h3 className="text-lg font-semibold mb-2">아이디어 발전</h3>
              <p className="text-gray-600">새로운 아이디어를 발견해보세요</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}