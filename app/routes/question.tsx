// import React from 'react';
// import MainWrapper from "~/userinterface/pattern/header/MainWrapper.tsx";
// import {css} from "@linaria/core";
// import {responsive} from "~/hook/ResponsiveSwitch.tsx";
// import Text from "~/userinterface/components/Text.tsx";
// import View from "~/userinterface/core/View.tsx";
// import type {Route} from "./+types/question";
// import Icon from "~/userinterface/foundation/Icon.tsx";
//
// export async function loader() {
//     return {};
// }
//
// function Question(
//     {
//         loaderData: {}
//     }: Route.ComponentProps
// ) {
//     return (
//         <MainWrapper>
//             <View ui={css`
//                 align-items: center;
//                 padding: 72px 16px 40px 16px;
//
//                 ${responsive.notDesktop} {
//                     padding-top: 24px;
//                 }
//             `}>
//                 <View ui={css`
//                     max-width: 720px;
//                     width: 100%;
//                     flex: 1;
//                     gap: 24px;
//                 `}>
//                     <View ui={css`
//                         gap: 24px;
//                     `}>
//                         <View ui={css`
//                             gap: 12px;
//                         `}>
//                             <Text type={'h5'} bold={true}>자주 묻는 질문</Text>
//                             {/*<View ui={css`*/}
//                             {/*    flex-direction: row !important;*/}
//                             {/*    padding: 4px;*/}
//                             {/*`}>*/}
//                             {/*    <View as={'input'}/>*/}
//                             {/*    <Icon iconType={'Search'} onClick={() => {*/}
//                             {/*        */}
//                             {/*    }} ui={css`*/}
//                             {/*        padding: 6px;*/}
//                             {/*        fill: var(--g-500);*/}
//                             {/*    `}/>*/}
//                             {/*</View>*/}
//                         </View>
//                         <View ui={css`
//                             gap: 8px;
//                         `}>
//                             <QuestionCell/>
//                         </View>
//                     </View>
//                 </View>
//             </View>
//         </MainWrapper>
//     );
// }
//
// interface QuestionCellProps {
//     question:
// }
//
// function QuestionCell(
//     {
//
//     }: QuestionCellProps
// ) {
//     return (
//
//         <View ui={css`
//             padding: 4px;
//             border-radius: 12px;
//             background: var(--g-50);
//             cursor: pointer;
//         `}>
//             <View ui={css`
//                 flex-direction: row !important;
//                 padding: 12px;
//             `}>
//                 <Text
//                     type={'p3'}
//                     bold={true}
//                     ui={css`
//                         color: var(--g-600);
//                         flex: 1;
//                     `}
//                 >모바일 청첩장 구매 후 며칠 동안 사용할 수 있나요?</Text>
//                 <Icon iconType={'ExpandArrow'} size={18} ui={css`
//                     fill: var(--g-500);
//                     rotate: 180deg;
//                 `}/>
//             </View>
//         </View>
//     )
// }
//
// export default Question;
