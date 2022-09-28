import { IRouteComponentProps, Link } from 'umi';

export default function Layout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  return (
    <div className="p-6 flex space-x-8">
      <div className="w-64 space-y-4">
        <div className="flex items-center pl-4">
          <img
            className="w-10 h-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/24560160?v=4"
            alt="avatar"
          />
          <div className="pl-4">
            <div className="text-xl">XRStudio</div>
            <div className="text-xs">v0.0.1 Beta</div>
          </div>
        </div>

        <div className="bg-white/5 rounded-xl h-64 p-4 space-y-2">
          <Link to="/" className="flex items-center text-white hover:text-white hover:bg-white/10 rounded-lg p-2 cursor-pointer">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <div className="text-sm pl-2">工作台</div>
          </Link>

          <Link to="/compile" className="flex items-center hover:text-white text-white hover:bg-white/10 rounded-lg p-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>

            <div className="text-sm pl-2">特征点</div>
          </Link>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-center py-5 space-x-4">
          <div className="text-sm">我的项目</div>
          <div className="py-1 px-2 text-xs bg-gray-500/50 rounded-full hover:bg-gray-500/75 cursor-pointer transition">
            + 创建合辑
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
