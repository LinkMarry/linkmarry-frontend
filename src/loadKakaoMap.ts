// import config from "@src/config";
//
// export const loadKakaoMap = () => {
//     const isSnap = !!process.env.VITE_SNAP;
//
//     if (isSnap) {
//         // dummy
//         if (!(window as any).kakao) {
//             (window as any).kakao = { maps: {} };
//         }
//         return Promise.resolve((window as any).kakao);
//     }
//
//     return new Promise<any>((resolve, reject) => {
//         if ((window as any).kakao) return resolve((window as any).kakao);
//         const script = document.createElement("script");
//
//         script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${config.kakao.javascriptKey}&libraries=services,clusterer,drawing`;
//         script.async = true;
//         script.onload = () => resolve((window as any).kakao);
//         script.onerror = () => reject(new Error("Kakao Maps SDK load failed"));
//         document.head.appendChild(script);
//     });
// };
