const fs = require('fs');
const path = require('path');

function replaceInDir(dir, replacements) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInDir(fullPath, replacements);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;
            for (const [from, to] of replacements) {
                if (content.includes(from)) {
                    content = content.replace(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), to);
                    changed = true;
                }
            }
            if (changed) {
                fs.writeFileSync(fullPath, content);
            }
        }
    }
}

const replacements = [
    ['~/routes/editor/wedding-invitation/components/EditorInspectorWrapper.tsx', '~/routes/editor/invitation/[url]/components/EditorInspectorWrapper.tsx'],
    ['~/routes/mypage/index/useMyPageIndex.ts', '~/routes/mypage/_layout/hook.ts'],
    ['~/routes/mypage/index/components/MyPageIndexSidebarType.ts', '~/routes/mypage/_layout/components/MyPageIndexSidebarType.ts'],
    ['import {useMyPageStat}', 'import useMyPageStat'], // Fix the default import error: TS2614
];

replaceInDir('app/routes', replacements);
