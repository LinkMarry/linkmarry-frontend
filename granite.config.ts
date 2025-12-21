import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'linkmarry',
  brand: {
    displayName: '링크메리', // 화면에 노출될 앱의 한글 이름으로 바꿔주세요.
    primaryColor: '#3182F6', // 화면에 노출될 앱의 기본 색상으로 바꿔주세요.
    icon: './public/logo512.png', // 화면에 노출될 앱의 아이콘 이미지 주소로 바꿔주세요.
  },
  web: {
    host: 'localhost',
    port: 3000,
    commands: {
      dev: 'react-router dev --port 3000',
      build: 'react-router build && pnpm move-build',
    },
  },
  permissions: [],
  outdir: 'build',
});
